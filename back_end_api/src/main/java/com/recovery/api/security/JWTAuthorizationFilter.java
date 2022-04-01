package com.recovery.api.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.interfaces.JWTVerifier;
import com.recovery.api.security.SecurityParams;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class JWTAuthorizationFilter extends OncePerRequestFilter {
    @Override
    protected void doFilterInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, FilterChain filterChain) throws ServletException, IOException {

        httpServletResponse.addHeader("Access-Control-Allow-Origin","*");
        httpServletResponse.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, DELETE, PATCH");
        httpServletResponse.addHeader("Access-Control-Allow-Headers","Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-request-Headers,authorization");
        httpServletResponse.addHeader("Access-Control-Expose-Headers","Access-Control-Allow-Origin,Access-Control-Allow-Credentials,authorization");
        if(httpServletRequest.getMethod().equals("OPTIONS")){
            httpServletResponse.setStatus(httpServletResponse.SC_OK);
        }

        else{
            String jwt = httpServletRequest.getHeader(SecurityParams.HEADER_NAME);
            if(jwt == null || ! jwt.startsWith(SecurityParams.HEADER_PREFIX))
            {
                filterChain.doFilter(httpServletRequest,httpServletResponse);
                return;
            }
            JWTVerifier verifier = JWT.require(Algorithm.HMAC256(SecurityParams.SECRET)).build();

            DecodedJWT decodedJWT = verifier.verify(JWT.decode(jwt.substring(SecurityParams.HEADER_PREFIX.length())));

            String username = decodedJWT.getSubject();
            List<String> roles = decodedJWT.getClaims().get("roles").asList(String.class);
            Collection<GrantedAuthority> authorities = new ArrayList<>();
            roles.forEach(r ->{
                authorities.add(new SimpleGrantedAuthority(r));
            });
            UsernamePasswordAuthenticationToken user = new UsernamePasswordAuthenticationToken(username,null,authorities);

            SecurityContextHolder.getContext().setAuthentication(user);

            filterChain.doFilter(httpServletRequest,httpServletResponse);
        }




    }
}
