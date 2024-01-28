import { Outlet } from "react-router-dom"
import AuthContextProvider from "../contexts/AuthContext"
import { Provider } from "react-redux"
import { store } from "../store"

function RootLayout() {
  return (
    <>
      <AuthContextProvider>
        <Provider store={store}>
          <Outlet />
        </Provider>
      </AuthContextProvider>
    </>
  )
}
export default RootLayout