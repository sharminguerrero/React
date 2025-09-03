import { authReducer } from "../../../src/auth";
import { types } from "../../../src/auth/types/types";

describe('pruebas en el authReducer', () => { 
    test('debe de retornar el estado por defecto', () => { 

        const state = authReducer({ logged: false}, {});
        expect (state).toEqual({logged:false});
     });

     test('debe del (login) llamar el login autenticar', () => { 
 
        const action = {
            type: types.login,
            payload: {
                name: 'Juan',
                id: '123'
            }
        }

        const state = authReducer({logged: false}, action);
        expect(state).toEqual({
            logged:true,
            user: action.payload
        })
      });

      test('debe del (logout) borrar el name del usuario', () => { 

        const state = {
            logged: true,
            user : {id: '123', name: 'Juan'}
        }

        const action = {
            type: types.logout
        }

        const newState = authReducer(state, action);

        expect(newState).toEqual({logged:false})

       });
 })