import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Mecanica from './pages/Mecanica';

const Routes = createAppContainer(
    //rotas de navegação
    createStackNavigator({
        Main: {
            screen: Main, 
            navigationOptions:{ 
                title: 'Ofitech'
            },
        },
        Mecanica: {
            screen: Mecanica,
            navigationOptions:{
                title: 'Mecanica'
            },
        },
    }, {
        //aplicado a todas as telas
        defaultNavigationOptions:{ // opções de navegação para todas as telas
            headerTintColor: '#FFF', //cor da fonte do cabeçalho
            headerBackTitleVisible: null,
            headerStyle:{ //estilização para o cabeçalho
                backgroundColor: '#31c4ed',
            }
        }
    })
);

export default Routes;