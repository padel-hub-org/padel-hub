import HomeController from './HomeController'
import AuthController from './AuthController'
import PlayerController from './PlayerController'
import EventController from './EventController'
import EventPlayerController from './EventPlayerController'

const Controllers = {
    HomeController: Object.assign(HomeController, HomeController),
    AuthController: Object.assign(AuthController, AuthController),
    PlayerController: Object.assign(PlayerController, PlayerController),
    EventController: Object.assign(EventController, EventController),
    EventPlayerController: Object.assign(EventPlayerController, EventPlayerController),
}

export default Controllers