package com.recovery.api.service;

import com.recovery.api.model.AppUser;
import com.recovery.api.repository.AppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Service
@Transactional
public class AccountServiceImpl implements AccountService {
    @Autowired
    private AppUserRepository appUserRepository;

//    @Autowired
   // private AppRoleRepository appRoleRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;


    @Override
    public AppUser loadUserByUsername(String username) {
        return appUserRepository.findByUsername(username);
    }

    @Override
    public void addRoleToUser(String username, String rolename) {
        AppUser appUser = appUserRepository.findByUsername(username);
//        AppRole appRole = appRoleRepository.findByRoleName(rolename);
//        appUser.getRoles().add(appRole);

    }

    @Override
    public List<AppUser> getAll(){

        return appUserRepository.findAll();
    }

    public AppUser findById(long id) {

        return appUserRepository.findById(id).get();
    }


}
