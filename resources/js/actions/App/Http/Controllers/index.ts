import HomeController from './HomeController'
import AuthController from './AuthController'
import PlayerController from './PlayerController'
import EventController from './EventController'
import EventPlayerController from './EventPlayerController'
import EventSettingController from './EventSettingController'
import EventGameController from './EventGameController'

const Controllers = {
    HomeController: Object.assign(HomeController, HomeController),
    AuthController: Object.assign(AuthController, AuthController),
    PlayerController: Object.assign(PlayerController, PlayerController),
    EventController: Object.assign(EventController, EventController),
    EventPlayerController: Object.assign(EventPlayerController, EventPlayerController),
    EventSettingController: Object.assign(EventSettingController, EventSettingController),
    EventGameController: Object.assign(EventGameController, EventGameController),
}

export default Controllers