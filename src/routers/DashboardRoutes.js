import { Route, Routes } from "react-router"
import { Navbar } from "../components/ui/NavBar"
import { DCScreen } from '../components/DC/DCScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { HeroScreen } from "../components/hero/HeroScreen"


export const DashboardRoutes = () => {
    return (
        <div>
           <Navbar/> 
           <Routes> 
                
                <Route path="marvel" element={ < MarvelScreen/> } />
                <Route path="dc" element={ < DCScreen/> } />
                <Route path="search" element={ < SearchScreen/> } />
                <Route path="hero" element={<HeroScreen/>}  />
                <Route path="/" element={ < MarvelScreen/> } />
                
            </Routes>
        </div>
    )
}
