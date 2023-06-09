package com.alquiler.demo.service;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@Service
public class FotoServiceImpl implements FotoService {


    @Override
    public Resource upload(String nombreFoto) throws MalformedURLException {

        Path rutaArchivo = getPath(nombreFoto);
        Resource recurso = new UrlResource(rutaArchivo.toUri());

        if (!recurso.exists() && !recurso.isReadable()){
            rutaArchivo = Paths.get("src/main/resources/static/img").resolve("no-user.png").toAbsolutePath();
        }

        return recurso;
    }

    @Override
    public String copy(MultipartFile archivo) throws IOException {
        String nombreArchivo = UUID.randomUUID().toString()+" "+ archivo.getOriginalFilename().replace(" ","");
        Path rutaArchivo = getPath(nombreArchivo);
        Files.copy(archivo.getInputStream(),rutaArchivo);
        return nombreArchivo;
    }

    @Override
    public boolean delete(String nombreFoto) {
        if (nombreFoto!=null && nombreFoto.length()>0){
            Path rutaFotoAnterior = Paths.get("upaloads").resolve(nombreFoto).toAbsolutePath();
            File archivoFotoAnterior = rutaFotoAnterior.toFile();
            if (archivoFotoAnterior.exists() && archivoFotoAnterior.canRead()){
                archivoFotoAnterior.delete();
                return true;
            }
        }
        return false;
    }

    @Override
    public Path getPath(String nombreFoto) {
        Path rutaArchivo = Paths.get("uploads").resolve(nombreFoto).toAbsolutePath();
        return rutaArchivo;
    }
}
