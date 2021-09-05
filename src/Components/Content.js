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
import User from '../Dashboard/Groups and Users/User';
import Permission from '../Dashboard/Groups and Users/Permissions/Permission';
import AddPermission from '../Dashboard/Groups and Users/Permissions/AddPermission'


export default function Content() {
    return (
        <>
            
                <Switch>
                    {/* <Route path='/Appointment' component={Appointment} />
                    <Route path='/Appversion' component={Appversion} />
                    <Route path='/Category' component={Category} />
                    <Route path='/Smsnotify' component={Smsnotify} />
                    <Route path='/Coustomers' component={Coustomers} />
                    <Route path='/ServiceProviders' component={ServiceProviders} />
                    <Route path='/addcategory'     component={addCategory} />
                    <Route path='/AddAppointment'     component={AddAppointment} />
                    <Route path='/Group'  component={Group} />
                    <Route path='/AddGroup'  component={AddGroup} />                    
                    <Route path='/User'  component={User}/>
                    <Route path='/Permission'  component={Permission} />
                    <Route path='/AddPermission'  component={AddPermission} /> */}


                 
                    <Route path='/Appointment' component={Appointment} />
                    <Route path='/Appversion' component={Appversion} />
                    <Route path='/Category' component={Category} />
                    <Route path='/Smsnotify' component={Smsnotify} />
                    <Route path='/Coustomers' component={Coustomers} />
                    <Route path='/ServiceProviders' component={ServiceProviders} />
                    <Route path='/addcategory'     component={addCategory} />
                    <Route path='/AddAppointment'     component={AddAppointment} />
                    <Route path='/Group'  component={Group} />
                    <Route path='/AddGroup'  component={AddGroup} />                    
                    <Route path='/User'  component={User}/>
                    <Route path='/Permission'  component={Permission} />
                    <Route path='/AddPermission'  component={AddPermission} />
             

                </Switch>
            
        </>
    )
}
