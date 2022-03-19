import i18n from 'i18n-js';
import { logger } from 'react-native-logs';
import { colorConsoleSync } from 'react-native-logs/dist/transports/colorConsoleSync';
import _ from 'lodash';

export const defaultConfig = {
    severity: 'info',
    transport: colorConsoleSync,
    transportOptions: null,
    levels: {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3,
    },
};

export const log = logger.createLogger();

export function distributeWaypoints(total_waypoints, num_of_robots) {
    let tasks = [];
    let reminder = 0;
    let quotient = 0;

    if (num_of_robots === 1) {
        // tasks.push([0, total_waypoints - 1, 0])
        tasks.push([1, total_waypoints, 1])
        return tasks;
    }

    reminder = total_waypoints % num_of_robots;
    quotient = Math.floor(total_waypoints / num_of_robots);

    let start_point = 0;

    for (i = 0; i < num_of_robots; i++) {
        let assignment = [0, 0, 0];

        if (i === num_of_robots - 1) {
            // assignment = [start_point - 1, start_point+quotient -1 +reminder, 0];
            assignment = [start_point, start_point + quotient + reminder, start_point];

        } else if (i === 0) {
            // assignment = [start_point, start_point - 1+quotient, 0];
            assignment = [start_point + 1, start_point + quotient, start_point + 1];
        }
        else {
            // assignment = [start_point - 1, start_point+quotient - 1, 0];
            assignment = [start_point + 1, start_point + quotient, start_point];
        }
        tasks.push(assignment);

        start_point = start_point + quotient;
    }

    return tasks;
}

export function getDateTimeStr(timestamp) {
    let now_str = new Date(0);
    try {
        if (timestamp !== null) {
            now_str.setUTCSeconds(timestamp.seconds);
        } else {
            return '';
        }
    }
    catch (err) {
        console.log(err);
        return '';
    }

    return `${now_str.toLocaleDateString()} ${now_str.toLocaleTimeString()}`;
}

export function checkDeviceInStatus(config, waitForStatus) {

    console.log(`current status ${robot.config.dev_status.running_mode} ${robot.config.mowing_info.status}`)

    if (config.dev_status.running_mode === waitForStatus[0] &&
        config.mowing_info.status === waitForStatus[1]
    ) {
        return true;
    }

    return false;
}

export function getPredictedTime(totalWaypoints, totalDevices) {
    // console.log (`total waypoints <${totalWaypoints}>, total devices <${totalDevices}>`);
    return Math.round(totalWaypoints / totalDevices / 60 / 3);
}

function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? i18n.t('hh') : i18n.t('hh')) : "";
    var mDisplay = m > 0 ? m + (m == 1 ? i18n.t('mm') : i18n.t('mm')) : "";
    var sDisplay = s > 0 ? s + (s == 1 ? i18n.t('ss') : i18n.t('ss')) : "";
    // return hDisplay + mDisplay + sDisplay; 
    return hDisplay + " " + mDisplay;
}

export function getTravelTime(waypointTraveltime, totalDevices = 1) {

    let totalSeconds = waypointTraveltime.reduce((s, f) => s + f.travel_time, 0)
    let avgSeconds = totalSeconds / totalDevices;
    return secondsToHms(avgSeconds);
}

export function getPredictedTaskTime(waypointTraveltime, taskRange, totalDevices = 1) {
    let avgSeconds = 1;
    return secondsToHms(avgSeconds);
}


export function resolveErrorCode(errorCode) {
    let flags = [];

    if (errorCode === 4294967296) {
        flags.push(errorCode);
        return flags;
    }

    if ((1 & errorCode) === 1) flags.push(1);
    if ((2 & errorCode) === 2) flags.push(2);
    if ((4 & errorCode) === 4) flags.push(4);
    if ((8 & errorCode) === 8) flags.push(8);
    if ((16 & errorCode) === 16) flags.push(16);
    if ((32 & errorCode) === 32) flags.push(32);
    if ((64 & errorCode) === 64) flags.push(64);
    if ((128 & errorCode) === 128) flags.push(128);
    if ((256 & errorCode) === 256) flags.push(256);
    if ((512 & errorCode) === 512) flags.push(512);
    if ((1024 & errorCode) === 1024) flags.push(1024);
    if ((2048 & errorCode) === 2048) flags.push(2048);
    if ((33554432 & errorCode) === 33554432) flags.push(33554432);


    return flags;
}

export function getErrorCodeMessage(errorCode) {
    let messages = [""];

    let flags = resolveErrorCode(errorCode);

    flags.map((num) => {
        messages.push(i18n.t(`m_error_code_${num}`) + '\n');
    });

    return messages
}

export function checkIfReadyToStart(robot) {
    let status = true;
    let errors = [];

    /* Check if robot has error events */
    for (const [key, value] of Object.entries(robot.config.dev_events)) {
        // if (key === 'malfunction_type' && value !== 'OK') {
        //     status = false;
        //     errors.push(value);
        // }
        if (value === true) {
            status = false;
            errors.push(key);
        }
    }

    if (robot.config.self_test_info.error_code !== 0) {
        status = false;
        errors.push(robot.config.self_test_info.error_code)
    }

    // REM: check if robot gps status in available mode (4 or 5)
    if ([0, 1, 2].includes(robot.config.dev_status.gps_quality)) {
        status = false;
        errors.push('GPS_NOT_READY');
    }

    // REM: check if device in boundary
    if (robot.config.mowing_info.within_the_boundary !== 1) {
        status = false;
        errors.push('NOT_WITHIN_THE_BOUNDARY');
    }

    if (robot.connection_status !== 'online') {
        status = false;
        errors.push('NOT_ONLINE');
    }

    // REM: check if robot in mow mode
    if (robot.config.dev_status.running_mode !== 2) {
        status = false;
        errors.push('NOT_IN_MOWING_MODE')
    }

    return {
        status,
        errors
    };
}

export function countTaskWaypoints(mowing_area) {
    let totalWaypoints = [];
    for (const key in mowing_area) {
        totalWaypoints = [..._.range(mowing_area[key]['start'], mowing_area[key]['destination'] + 1), ...totalWaypoints];
    }
    return totalWaypoints;
}

export function checkIfRobotHasTask(robot) {
    let res = {
        "status": 0,
        "results": "0 - idle"
    }

    if (_.has(robot, 'config') !== true) {
        console.log('no robot config to check --> ', robot);
        return res;
    }

    if (_.has(robot, 'assignment') && _.has(robot.assignment, 'task')) {
        res = {
            "status": 2,
            "results": `2 - working ${robot.config.dev_status.running_mode}`
        }
    } 


    if (robot.config.dev_status.running_mode === 0) {
        console.log('available for select')
    } 
    else if (robot.config.dev_status.running_mode === 1) {
        if (robot.config.installing_info.status === 0) {
            res = {
                "status": 10,
                "results": `10 - setup charting task ${robot.config.installing_info.status}`
            }
        }
        if (robot.config.installing_info.status === 1) {
            res = {
                "status": 11,
                "results": `11 - execute charting task ${robot.config.installing_info.status}`
            }
        } 
    } else if (robot.config.dev_status.running_mode === 2) {
        if (robot.config.mowing_info.status === 0) {
            res = {
                "status": 20,
                "results": `20 - setup mowing task ${robot.config.installing_info.status}`
            }
        }
        else if (robot.config.mowing_info.status === 1) {
            res = {
                "status": 21,
                "results": `21 - execute mowing task ${robot.config.installing_info.status}`
            }
        }
        else if (robot.config.mowing_info.status === 2) {
            res = {
                "status": 22,
                "results": `22 - pause mowing task ${robot.config.installing_info.status}`
            }
        } else {
            res = {
                "status": 299,
                "results": `299 - unknown mowing status ${robot.config.installing_info.status}`
            }
        }
    } else {
        res = {
            "status": 999,
            "results": `999 - unknown running mode ${robot.config.dev_status.running_mode}`
        }
    }

    console.log('robot status check', res);

    return res;
}