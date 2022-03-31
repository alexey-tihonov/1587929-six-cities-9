import {AuthorizationStatus, NameSpace} from '../../const';
import {State} from '../../types/state';
import {UserInfo} from '../../types/user-info';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.user].authorizationStatus;
export const getUserInfo = (state: State): UserInfo | undefined => state[NameSpace.user].userInfo;
