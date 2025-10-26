import HomeController from './HomeController'
import AuthController from './AuthController'
import PlayerController from './PlayerController'

const Controllers = {
    HomeController: Object.assign(HomeController, HomeController),
    AuthController: Object.assign(AuthController, AuthController),
    PlayerController: Object.assign(PlayerController, PlayerController),
}

export default Controllers