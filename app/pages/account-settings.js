import SlideBar from "../components/slidebar"
import NavBar from "../components/navBar"
import { Tab, Fragment } from '@headlessui/react'
import Input from "../components/input"

export default function UserSettings(){
    return(
        <SlideBar>
            <div>
                <NavBar/>

                {/* Settings */}
                <div className="w-full h-full bg-red-500 text-center justify-center">
                    <p>Settings</p>
                    <div className="w-2/3 mx-auto">
                        <Input
                            name="password" 
                            placeholder="" 
                            label="Actual "
                            type="password"
                            id="actualPass"
                        />

                    </div>
                </div>
            </div>
        </SlideBar>
    )
}