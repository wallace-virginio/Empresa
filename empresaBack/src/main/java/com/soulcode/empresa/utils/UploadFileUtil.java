package com.soulcode.empresa.utils;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.web.multipart.MultipartFile;

public class UploadFileUtil {

	public static void salvarArquivo(String uploadDir, String fileName, MultipartFile file) throws IOException {

		// INSTANCIANDO O LOCAL DO ARQUIVO
		Path uploadPath = Paths.get(uploadDir);

		if (!Files.exists(uploadPath)) {
			Files.createDirectories(uploadPath);
		}

		try (InputStream inputStream = file.getInputStream()) {

			// Dentro do FilePath tem o caminho e o nome do arquivo para salvar
			Path filePath = uploadPath.resolve(fileName);

			// Aqui passar os parâmetros
			Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);
		} catch (IOException e) {
			throw new IOException("Não foi possível enviar o seu arquivo " + fileName, e);
		}
	}

}
