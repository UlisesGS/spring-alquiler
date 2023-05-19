package com.alquiler.demo.service;

import com.alquiler.demo.entity.Usuario;
import com.alquiler.demo.repository.UsuarioRepositirio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioServiceImpl implements UsuarioService {
    @Autowired
    private UsuarioRepositirio repositirio;

    @Override
    public List<Usuario> findAll() {
        return repositirio.findAll();
    }

    @Override
    public Optional<Usuario> findById(Long id) {
        return repositirio.findById(id);
    }

    @Override
    public Optional<Usuario> findByUsername(String username) {
        return repositirio.findByUsername(username);
    }

    @Override
    public Usuario save(Usuario usuario) {
        return repositirio.save(usuario);
    }

    @Override
    public void deleteById(Long id) {
        repositirio.deleteById(id);
    }
}
