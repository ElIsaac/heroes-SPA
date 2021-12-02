import { Route, Routes } from "react-router"
import { DCScreen } from '../components/DC/DCScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { LoginScreen } from "../components/login/LoginScreen"
import { Navbar } from "../components/ui/NavBar"
export const AppRouter = () => {
    return (
        <div>
            <Navbar/>
            <Routes>
                
                <Route path="/marvel" element={ < MarvelScreen/> } />
                <Route path="/marvel" element={ < MarvelScreen/> } />
                <Route path="/dc" element={ < DCScreen/> } />
                <Route path="/search" element={ < SearchScreen/> } />
                <Route path="/login" element={ < LoginScreen/> } />

            </Routes>
        </div>
    )
}
