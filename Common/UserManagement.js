import { db } from '../Config/Firebase';
import * as firebase from 'firebase';
import { log } from  './Helper';
import Constants from 'expo-constants';
import _ from 'lodash';

export async function saveToken(tokenId, payload) {

    let tokens_ref = db.collection('tokens').doc(tokenId);

    const token_ctx = {
        token: tokenId,
        uid: payload.uid,
        email: payload.email,
        deviceId: payload.deviceId,
        deviceName: 'simulator',
        systemVersion: '0.0.0',
        locale: payload.locale,
        updated_time: firebase.firestore.FieldValue.serverTimestamp(),
    }

    if (!_.isEmpty(payload.deviceName)) {
        token_ctx.deviceName = payload.deviceName;
    }

    if (!_.isEmpty(payload.systemVersion)) {
        token_ctx.systemVersion = payload.systemVersion;
    }

    let result = await tokens_ref.set(token_ctx);

    log.info(`[User] save device token<${tokenId}> of user<${payload.uid}> on device <${payload.deviceId}>(${payload.deviceName})`);

    return result;
}

export async function removeToken() {

    log.debug(`[User] Current sessionId: ${Constants.sessionId}`);

    let tokens_ref = db.collection('tokens').where('deviceId', '==', Constants.sessionId);

    let snapshot = await tokens_ref.get();

    if (snapshot.size === 0) {
        log.debug('[User] no token related records');
    } else {
        
        snapshot.forEach(doc => {
            
            const token_doc = doc.data();

            db.collection('tokens').doc(doc.id).delete().then(()=>{
                log.debug(`[User] remove token record with sessionId<${token_doc.deviceId}>`);
            });
            
        });
    }

}