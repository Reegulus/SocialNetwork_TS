import React from "react";
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'
import {Sidebar} from "../Sidebar/Sidebar";
import {Friends} from "./friends/Friends";

type NavbarPropsType = {
    // sidebarPage: SidebarPageType
}

export function Navbar() {

    return (
        <div className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
            </div>

            <div className={s.item}>
                <p>
                    <NavLink to='/friends'
                             activeClassName={s.active}>
                        <Friends/></NavLink>
                </p>
            </div>

            {/*<div className={s.itemSide}>
                {props.sidebarPage.sidebar.map
                (s => <Sidebar name={s.name} id={s.id}/>)}
            </div>*/}


        </div>
    )
}

