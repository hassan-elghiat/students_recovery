package com.recovery.api;

import java.util.Arrays;
import java.util.Collections;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@SpringBootApplication
public class StudentsRecoveryApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(StudentsRecoveryApiApplication.class, args);
		System.out.println("STUDENTS RECOVERY API IS WORKING !! ");
	}
	   @Bean
	    public BCryptPasswordEncoder bCryptPasswordEncoder() {
	        return new BCryptPasswordEncoder();
	    }

	    @Bean
	    public CorsFilter corsFilter() {
	        final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	        final CorsConfiguration config = new CorsConfiguration();
	        config.setAllowCredentials(true);
	        config.setAllowedOrigins(Collections.singletonList("*"));
	        config.setAllowedHeaders(Arrays.asList("Origin", "Content-Type", "Accept"));
	        config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "OPTIONS", "DELETE", "PATCH"));
	        source.registerCorsConfiguration("/**", config);
	        return new CorsFilter(source);
	    }

}
