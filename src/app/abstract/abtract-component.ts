import { AuthenticationService } from './../components/auth/service/authentication.service';
import { AccessRoll } from '../constants/access-roll';
import { User } from '../entities';

export class AbstractComponent {

    constructor(protected authenticationService: AuthenticationService) { }

    public get accessRole() {
        return AccessRoll;
    }

    public get loggedUser(): User {
        return this.authenticationService.currentUserValue;
    }
}
