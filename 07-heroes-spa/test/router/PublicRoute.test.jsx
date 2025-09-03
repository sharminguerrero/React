import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/auth";
import { PublicRoute } from "../../src/router/PublicRoute";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe('pruebas en PublicRoute', () => { 

    test('debe de mostrar el children sino esta autenticado', () => { 

        const contextValue = {
            logged: false
        }

        render(
          <AuthContext.Provider value={contextValue}>
            <PublicRoute>
                <h1>Ruta Publica</h1>
            </PublicRoute>
          </AuthContext.Provider>
        );

        expect (screen.getByText('Ruta Publica')).toBeTruthy();
     });

     test('debe de navegar si esta autenticado', () => { 


        const contextValue = {
            logged: true,
            user: 'Sharmin',
            id: 'ABC'
        }

        render(
          <AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/login']}>
            <Routes>
                <Route path="login" element={
                     <PublicRoute>
                     <h1>Ruta Publica</h1>
                 </PublicRoute>
                 }/>
           <Route path="marvel" element={<h1>Pagina Marvel</h1>}/>
            </Routes>
            </MemoryRouter>
          </AuthContext.Provider>
        );

        expect (screen.getByText("Pagina Marvel")).toBeTruthy();

      })
 })
