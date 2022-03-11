package com.soulcode.empresa.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.soulcode.empresa.models.Supervisor;
import com.soulcode.empresa.services.SupervisorService;
import com.soulcode.empresa.utils.UploadFileUtil;



@RestController
@RequestMapping("escola")
@CrossOrigin
public class UploadFileController {
	
	@Autowired
	private	SupervisorService supervisorService;
	
	@PostMapping("/envio/{id_Supervisor}")
	public ResponseEntity<String> enviarDados(@PathVariable Integer id_Supervisor, MultipartFile foto,@RequestParam("nome") String nome){
		
		String fileName = nome;
		
		String uploadDir = "C://Users//tom-a//OneDrive//Documents//JavaWeb SoulCode Academy//PastaTeste//escolaFront//src//assets//imagens";
		
		String nomeMaisCaminho = uploadDir + "/" + nome;
		
		Supervisor supervisor = supervisorService.salvarFoto(id_Supervisor, nomeMaisCaminho);
		
		try {
			UploadFileUtil.salvarArquivo(uploadDir, fileName, foto);
		}catch(Exception e) {
			System.out.println("O arquivo não foi enviado "+ e);
		}
		
		System.out.println("Deu certo: "+ nomeMaisCaminho);
		return ResponseEntity.ok("Arquivo enviado");
	}

}
