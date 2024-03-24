import { deviceType, browserName, osName, osVersion } from "react-device-detect";
import { detectIncognito } from "detectincognitojs";
import { DeviceInfoUI } from '@ui';
import {useState} from "react";

export const DeviceInfo = () => {
  const [ isPrivate, setIsPrivate ] = useState(false)

  detectIncognito().then((result) => setIsPrivate(result.isPrivate));

  return (
    <DeviceInfoUI
      deviceType={deviceType}
      browserName={browserName}
      osName={osName}
      osVersion={osVersion}
      isPrivate={isPrivate}
    />
  )
}
