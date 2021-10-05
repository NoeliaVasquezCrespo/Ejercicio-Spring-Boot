package com.example.sakila.appsakila;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "actor", path = "actor")

public interface ActorRestRepository extends PagingAndSortingRepository<Actor, Integer> {

   
    List<Actor> findByFirst(@Param("first") String first);
}