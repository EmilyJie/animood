import React ,{createContext,useState,useEffect} from "react";
import {AsyncStorage} from '@react-native-async-storage/async-storage';
import userData from '../json/user.json';
import Constants from 'expo-constants';
import { app, db } from '../Config/Firebase.js';
import * as Localization from 'expo-localization';
import { log } from '../Common/Helper';
import { saveToken } from '../Common/UserManagement';

const ME_PERSISTENCE_KEY = "ME_PERSISTENCE_KEY";
const HAS_SET_KEY = "HAS_SET_KEY";
const SIGN_PERSISTENCE_KEY = "SIGN_PERSISTENCE_KEY";
const SIGN_HAS_SET_KEY = "SIGN_HAS_SET_KEY";

export const UPDATE_EMAIL = 'UPDATE_EMAIL'
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
export const UPDATE_UID = 'UPDATE_UID'
export const LOGIN = 'LOGIN'
export const SIGNUP = 'SIGNUP'

export const updateEmail = email => {
    return {
        type: UPDATE_EMAIL,
        payload: email
    }
}

export const updatePassword = password => {
    return {
        type: UPDATE_PASSWORD,
        payload: password
    }
}

export const updateUid = uid => {
    return {
        type: UPDATE_UID,
        payload: uid
    }
}

export const login = () => {
    return async (dispatch, getState) => {
        try {
            let token = '';

            const { email, password } = getState().user;
            const response = await app.auth().signInWithEmailAndPassword(email, password);

            if (token !== '') {
                try {
                    saveToken(token, {
                        uid: response.user.uid,
                        email: response.user.email,
                        deviceId: Constants.sessionId,
                        deviceName: Constants.deviceName,
                        systemVersion: Constants.systemVersion,
                        locale: Localization.locale
                    });
                } catch (err) {
                    log.debug(err);
                }
            }

        } catch (e) {
            //log.warn('failed to login user: ', e.message);

            const errorCode = e.code.replace(/\//g, '_').replace(/-/g, '_');
        }
    }
}

export const setUser = ctxt => {
    return async (dispatch, getState) => {
        try {
            let db_ctxt = {
                ...ctxt,
                updated_time: firebase.firestore.FieldValue.serverTimestamp(),
            }

            const user = await db
                .collection('users')
                .doc(db_ctxt.uid)
                .update(db_ctxt);

            //log.debug(`update db user with`, db_ctxt);

            dispatch({ type: LOGIN, payload: ctxt });
        } catch (e) {
            console.log(e);
        }
    }
}

export const getUser = uid => {
    return async (dispatch, getState) => {
        try {
            const user = await db
                .collection('users')
                .doc(uid)
                .get();

            dispatch({ type: LOGIN, payload: user.data() });
        } catch (e) {
            alert(e);
        }
    }
}

export const signup = () => {
    return async (dispatch, getState) => {
        try {
            const { email, password } = getState().user
            const response = await app.auth().createUserWithEmailAndPassword(email, password);

            dispatch({ type: SIGNUP, payload: response.user })
        } catch (e) {
            console.log(e)
        }
    }
}