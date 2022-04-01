package com.recovery.api.service;

import com.recovery.api.model.AppUser;
import com.recovery.api.model.AppRole;

import java.util.List;

public interface AccountService {
//    public AppUser saveUser(String username, String password, String confirmedPassword);
//    public AppRole save(AppRole role);
    public AppUser loadUserByUsername(String username);
    public void addRoleToUser(String username,String rolename);


    List<AppUser> getAll();

//    AppUser saveUserR(String username, String password, String repassword, long id);
}
