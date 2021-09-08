import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Appointment from '../Dashboard/MasterData/Appointment/Appointment';
import Appversion from '../Dashboard/MasterData/Appversion';
import Category from '../Dashboard/MasterData/Category/Category';
import Smsnotify from '../Dashboard/MasterData/Smsnotify';
import Coustomers from '../Dashboard/Service Management/Customers';
import ServiceProviders from '../Dashboard/Service Management/ServiceProviders';
import addCategory from '../Dashboard/MasterData/Category/addCategory';
import AddAppointment from '../Dashboard/MasterData/Appointment/AddAppointment';
import Group from '../Dashboard/Groups and Users/Groups/Group';
import AddGroup from '../Dashboard/Groups and Users/Groups/AddGroup';
import User from '../Dashboard/Groups and Users/Users/User';
import AddUsers from '../Dashboard/Groups and Users/Users/AddUsers';
import Permission from '../Dashboard/Groups and Users/Permissions/Permission';
import AddPermission from '../Dashboard/Groups and Users/Permissions/AddPermission'
import updateCategory from '../Dashboard/MasterData/Category/updateCategory';
import viewUser from '../Dashboard/Groups and Users/Users/viewUser';
import Home from '../Dashboard/Home';
import Country from '../Dashboard/MasterData/Country/Country';
import AddCountry from '../Dashboard/MasterData/Country/AddCountry';
import Province from '../Dashboard/MasterData/Province/Province';
import AddProvince from '../Dashboard/MasterData/Province/AddProvince';
import City from '../Dashboard/MasterData/City/City';
import AddCity from '../Dashboard/MasterData/City/AddCity';








export default function Content() {
    return (
        <>
            
                <Switch>
                    <Route path='/Home' component={Home} />
                    <Route path='/Appointment' component={Appointment} />
                    <Route path='/Appversion' component={Appversion} />
                    <Route path='/Category' component={Category} />
                    <Route path='/addcategory'     component={addCategory} />
                    <Route path='/updateCategory' component={updateCategory} />
                    <Route path='/Smsnotify' component={Smsnotify} />
                    <Route path='/Coustomers' component={Coustomers} />
                    <Route path='/ServiceProviders' component={ServiceProviders} />
                    <Route path='/AddAppointment'     component={AddAppointment} />
                    <Route path='/Group'  component={Group} />
                    <Route path='/AddGroup'  component={AddGroup} />                    
                    <Route path='/User'  component={User}/>
                    <Route path='/viewUser'  component={viewUser}/>
                    <Route path='/AddUsers'  component={AddUsers}/>
                    <Route path='/Permission'  component={Permission} />
                    <Route path='/AddPermission'  component={AddPermission} />
                    <Route path='/Country'  component={Country} />
                    <Route path='/AddCountry'  component={AddCountry} />
                    <Route path='/Province'  component={Province} />
                    <Route path='/AddProvince'  component={AddProvince} />
                    <Route path='/City' component={City} />
                    <Route path='/AddCity' component={AddCity} />
             

                </Switch>
            
        </>
    )
}
