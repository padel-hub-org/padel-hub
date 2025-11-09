import HomeController from './HomeController'
import AuthController from './AuthController'
import PlayerController from './PlayerController'
import EventController from './EventController'

const Controllers = {
    HomeController: Object.assign(HomeController, HomeController),
    AuthController: Object.assign(AuthController, AuthController),
    PlayerController: Object.assign(PlayerController, PlayerController),
    EventController: Object.assign(EventController, EventController),
}

export default Controllers