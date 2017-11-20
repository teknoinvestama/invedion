function changeLang(lang_string) {
    
	
	if(localStorage.getItem("language")=='en'){
			
			$('#menu').html('<li><img src="images/top_left_logo.png" width="700" height="220" class="top_left_logo"></li>\
        <li id="l1"><a href="login.html"><img src="images/icon_login.png" width="75" height="75" class="menu_icon"/>Login / Register</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="language.html"><img src="images/icon_lang.png" width="75" height="75" class="menu_icon"/>Language</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="library.html"><img src="images/icon_library.png" width="75" height="75" class="menu_icon"/>Your library</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="about.html"><img src="images/icon_about.png" width="75" height="75" class="menu_icon"/>About application</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="https://play.google.com/store/apps/details?id=com.MagazineContentApp"><img src="images/icon_rate.png" width="75" height="75" class="menu_icon"/>Rate application</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="#" onclick="navigator.app.exitApp();"><img src="images/icon_exit.png" width="75" height="75" class="menu_icon"/>Exit</a></li>');
			
			if(localStorage.getItem("mca_access")=='mca_ok!'){
			
				$('#l1').html('<a href="login.html#logout=end"><img src="images/icon_login.png" width="75" height="75" class="menu_icon"/>Logout<div style="color:#FFFFFF; font-size:30px;">'+localStorage.getItem("login")+'</div></a>');	
	
			}
		
			$('#top_sub_txt').html('Search');
			
			$('#lx1').html('Login to Magazine Content App');
			$('#lx2').html('Login:');
			$('#lx3').html('Password:');
			$('#lx4').html('Register');
			$('#lx5').html('Forgot password');
			$('#login').val("Login");
			
			$('#lx6').html('Register to Magazine Content App');
			$('#lx7').html('Login / Mail:');
			$('#lx8').html('Password:');
			$('#lx9').html('Repeat pass:');
			$('#lx10').html('Back to login');
			$('#register').val("Register");
			
			$('#lx11').html('Remind password');
			$('#lx12').html('Mail:');
			$('#lx13').html('Back to login');
			$('#send').val("Send");
			
			$('#lx14').html('Select your library');
		    $('#lx15').html('Magazines \(registered & online\)');
		    $('#lx16').html('Articles \(offline\)');
			$('#lx17').html('Your library');
			$('#lx18').html('About application');
		
			$('#error').html('Error: Connection problem...');
			$('#error_search').html('Error: Enter search term...');
		    
			$('#lx19').html('Account has been created...');
			$('#lx20').html('This mail exist in our database...');
			$('#lx21').html('Passwords don\'t match...');
			$('#lx22').html('Incorrect mail...');
			$('#lx23').html('Fill all fields...');
			$('#lx24').html('Fill the login and password...');

			$('#lx25').html('New password was send on your mail...');
			$('#lx26').html('This mail doesn\'t exist in our database...');
			$('#lx27').html('Incorrect login or password...');
			$('#lx28').html('Error: You are not login...');
		
			$('#lx29').html('Change app language:');
			$('#lx30').replaceWith('<div class="ce_search" id="lx30">No results for this query</div>');
			$('#lx31').replaceWith('<div class="ce" id="lx31">No results for this query</div>');
			$('#lx32').replaceWith('<div class="ce" id="lx32">Your library is empty</div>');
			$('#lx33').html('Your offline library is empty...');
		
			window.vtxt1 = 'Magazine was successfully delete from library';
			window.vtxt2 = 'Information';
			window.vtxt3 = 'OK';
			window.vtxt4 = 'Magazine was successfully added to library';
			window.vtxt5 = 'Connection problem';
			
			$('.tc_title').replaceWith('<span class="tc_title">Table of Contents:</span>');
			
	}
		
	if(localStorage.getItem("language")=='pl'){
			
			$('#menu').html('<li><img src="images/top_left_logo.png" width="700" height="220" class="top_left_logo"></li>\
        <li id="l1"><a href="login.html"><img src="images/icon_login.png" width="75" height="75" class="menu_icon"/>Logowanie / Rejestracja</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="language.html"><img src="images/icon_lang.png" width="75" height="75" class="menu_icon"/>Język</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="library.html"><img src="images/icon_library.png" width="75" height="75" class="menu_icon"/>Twoja biblioteka</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="about.html"><img src="images/icon_about.png" width="75" height="75" class="menu_icon"/>O aplikacji</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="https://play.google.com/store/apps/details?id=com.MagazineContentApp"><img src="images/icon_rate.png" width="75" height="75" class="menu_icon"/>Oceń aplikację</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="#" onclick="navigator.app.exitApp();"><img src="images/icon_exit.png" width="75" height="75" class="menu_icon"/>Wyjście</a></li>');

			if(localStorage.getItem("mca_access")=='mca_ok!'){
			
				$('#l1').html('<a href="login.html#logout=end"><img src="images/icon_login.png" width="75" height="75" class="menu_icon"/>Wyloguj<div style="color:#FFFFFF; font-size:30px;">'+localStorage.getItem("login")+'</div></a>');	
	
			}
			
			$('#top_sub_txt').html('Szukaj');
			
			$('#lx1').html('Logowanie do Magazine Content App');
			$('#lx2').html('Login:');
			$('#lx3').html('Hasło:');
			$('#lx4').html('Rejestracja');
			$('#lx5').html('Przypomnij hasło');
			$('#login').val("Zaloguj");
			
			$('#lx6').html('Rejestracja do Magazine Content App');
			$('#lx7').html('Login / Mail:');
			$('#lx8').html('Hasło:');
			$('#lx9').html('Powt. hasło:');
			$('#lx10').html('Powrót');
			$('#register').val("Zarejestruj");
			
			$('#lx11').html('Przypomnij hasło');
			$('#lx12').html('Mail:');
			$('#lx13').html('Powrót');
			$('#send').val("Wyślij");
		
			$('#lx14').html('Wybierz twoją bibliotekę');
			$('#lx15').html('Magazyny \(zarejestrowani & online\)');
		    $('#lx16').html('Artykuły \(offline\)');
			$('#lx17').html('Twoja biblioteka');
			$('#lx18').html('O aplikacji');
		
			$('#error').html('Error: Problem z połączeniem...');
			$('#error_search').html('Error: Wpisz szukaną frazę...');
			
			$('#lx19').html('Konto zostało utworzone...');
			$('#lx20').html('Ten mail jest już w bazie...');
			$('#lx21').html('Hasła nie pasują...');
			$('#lx22').html('Nieporawny mail...');
			$('#lx23').html('Wypełnij wszystkie pola...');
			$('#lx24').html('Wypełnij login i hasło...');
		
			$('#lx25').html('Nowe hasło zostało wysłane na maila...');
			$('#lx26').html('Ten mail nie istnieje w bazie...');
			$('#lx27').html('Nieporpawny login lub hasło...');
			$('#lx28').html('Error: Nie jesteś zalogowany...');
		
			$('#lx29').html('Zmień język aplikacji:');
			$('#lx30').replaceWith('<div class="ce_search" id="lx30">Brak wyników</div>');
			$('#lx31').replaceWith('<div class="ce" id="lx31">Brak wyników</div>');
			$('#lx32').replaceWith('<div class="ce" id="lx32">Twoja biblioteka jest pusta</div>');
			$('#lx33').html('Twoja biblioteka offline jest pusta...');
		
			window.vtxt1 = 'Magazyn został usuniety z biblioteki';
			window.vtxt2 = 'Informacje';
			window.vtxt3 = 'OK';
			window.vtxt4 = 'Magazyn został dodany do biblioteki';
			window.vtxt5 = 'Problem z połączeniem';
			
			$('.tc_title').replaceWith('<span class="tc_title">Spis treści:</span>'); 
	}
	
	if(localStorage.getItem("language")=='it'){
			
			$('#menu').html('<li><img src="images/top_left_logo.png" width="700" height="220" class="top_left_logo"></li>\
        <li id="l1"><a href="login.html"><img src="images/icon_login.png" width="75" height="75" class="menu_icon"/>Accesso / Registrare</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="language.html"><img src="images/icon_lang.png" width="75" height="75" class="menu_icon"/>Lingua</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="library.html"><img src="images/icon_library.png" width="75" height="75" class="menu_icon"/>La vostra biblioteca</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="about.html"><img src="images/icon_about.png" width="75" height="75" class="menu_icon"/>A proposito di applicazione</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="https://play.google.com/store/apps/details?id=com.MagazineContentApp"><img src="images/icon_rate.png" width="75" height="75" class="menu_icon"/>Applicazione tasso</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="#" onclick="navigator.app.exitApp();"><img src="images/icon_exit.png" width="75" height="75" class="menu_icon"/>Uscita</a></li>');
			
			if(localStorage.getItem("mca_access")=='mca_ok!'){
			
				$('#l1').html('<a href="login.html#logout=end"><img src="images/icon_login.png" width="75" height="75" class="menu_icon"/>Esci<div style="color:#FFFFFF; font-size:30px;">'+localStorage.getItem("login")+'</div></a>');	
	
			}
		
			$('#top_sub_txt').html('Ricerca');
			
			$('#lx1').html('Accedi a Magazine Content App');
			$('#lx2').html('Accesso:');
			$('#lx3').html('Password:');
			$('#lx4').html('Registrare');
			$('#lx5').html('Ha dimenticato la password');
			$('#login').val("Accesso");
			
			$('#lx6').html('Registrati per Magazine Content App');
			$('#lx7').html('Mail:');
			$('#lx8').html('Password:');
			$('#lx9').html('Ripet. pass:');
			$('#lx10').html('Torna al login');
			$('#register').val("Registrare");
			
			$('#lx11').html('Ricorda la password');
			$('#lx12').html('Mail:');
			$('#lx13').html('Torna al login');
			$('#send').val("Inviare");
			
			$('#lx14').html('Selezionare la libreria');
		    $('#lx15').html('Riviste \(registrati e online\)');
		    $('#lx16').html('Articoli \(offline\)');
			$('#lx17').html('La vostra biblioteca');
			$('#lx18').html('A proposito di applicazione');
		
			$('#error').html('Errore: Problema di connessione...');
			$('#error_search').html('Errore: Inserire termine di ricerca...');
		    
			$('#lx19').html('Account è stato creato...');
			$('#lx20').html('Questa mail esiste nel nostro database...');
			$('#lx21').html('Le password non corrispondono...');
			$('#lx22').html('Mail non corretto...');
			$('#lx23').html('Compila tutti i campi...');
			$('#lx24').html('Riempire il login e password...');

			$('#lx25').html('Nuova password è stato inviato sulla tua mail...');
			$('#lx26').html('Questa email non esiste nel nostro database...');
			$('#lx27').html('User e password non corretti...');
			$('#lx28').html('Errore: Non hai login...');
		
			$('#lx29').html('Cambia lingua app:');
			$('#lx30').replaceWith('<div class="ce_search" id="lx30">Nessun risultato per questa ricerca</div>');
			$('#lx31').replaceWith('<div class="ce" id="lx31">Nessun risultato per questa ricerca</div>');
			$('#lx32').replaceWith('<div class="ce" id="lx32">La vostra biblioteca è vuota</div>');
			$('#lx33').html('La vostra biblioteca in linea è vuoto...');
		
			window.vtxt1 = 'Magazine è stato eliminare con successo dalla libreria';
			window.vtxt2 = 'Informazione';
			window.vtxt3 = 'OK';
			window.vtxt4 = 'Magazine è stata inserita correttamente alla libreria';
			window.vtxt5 = 'Problema di connessione';
			
			$('.tc_title').replaceWith('<span class="tc_title">Sommario:</span>');
			
	}
		
	if(localStorage.getItem("language")=='es'){
			
			$('#menu').html('<li><img src="images/top_left_logo.png" width="700" height="220" class="top_left_logo"></li>\
        <li id="l1"><a href="login.html"><img src="images/icon_login.png" width="75" height="75" class="menu_icon"/>Inicio de sesión / Registro</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="language.html"><img src="images/icon_lang.png" width="75" height="75" class="menu_icon"/>Idioma</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="library.html"><img src="images/icon_library.png" width="75" height="75" class="menu_icon"/>Tu biblioteca</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="about.html"><img src="images/icon_about.png" width="75" height="75" class="menu_icon"/>Acerca de la aplicación</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="https://play.google.com/store/apps/details?id=com.MagazineContentApp"><img src="images/icon_rate.png" width="75" height="75" class="menu_icon"/>Tarifa de aplicación</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="#" onclick="navigator.app.exitApp();"><img src="images/icon_exit.png" width="75" height="75" class="menu_icon"/>Salida</a></li>');
			
			if(localStorage.getItem("mca_access")=='mca_ok!'){
			
				$('#l1').html('<a href="login.html#logout=end"><img src="images/icon_login.png" width="75" height="75" class="menu_icon"/>Cerrar sesión<div style="color:#FFFFFF; font-size:30px;">'+localStorage.getItem("login")+'</div></a>');	
	
			}
		
			$('#top_sub_txt').html('Buscar');
			
			$('#lx1').html('Iniciar sesión en Magazine Content App');
			$('#lx2').html('Iniciar ses.:');
			$('#lx3').html('Contrasena:');
			$('#lx4').html('Register');
			$('#lx5').html('Forgot password');
			$('#login').val("Iniciar sesión");
			
			$('#lx6').html('Registrarse en Magazine Content App');
			$('#lx7').html('Correo:');
			$('#lx8').html('Contrasena:');
			$('#lx9').html('Repita pase:');
			$('#lx10').html('Atras para iniciar sesión');
			$('#register').val("Registro");
			
			$('#lx11').html('Recordar contrasena');
			$('#lx12').html('Correo:');
			$('#lx13').html('Atras para iniciar sesión');
			$('#send').val("Enviar");
			
			$('#lx14').html('Seleccione su biblioteca');
		    $('#lx15').html('Revistas \(registradas y en línea\)');
		    $('#lx16').html('Artículos \(sin conexión\)');
			$('#lx17').html('Tu biblioteca');
			$('#lx18').html('Acerca de la aplicación');
		
			$('#error').html('Error: Problema de conexión...');
			$('#error_search').html('Error: Ingrese el término de búsqueda...');
		    
			$('#lx19').html('Cuenta se ha creado...');
			$('#lx20').html('Este correo existe en nuestra base de datos...');
			$('#lx21').html('Las contraseñas no coinciden...');
			$('#lx22').html('Correo incorrecto...');
			$('#lx23').html('Rellenar todos los campos...');
			$('#lx24').html('Rellene el nombre de usuario y la contraseña...');

			$('#lx25').html('Se ha enviado una nueva contraseña a tu correo...');
			$('#lx26').html('Este correo no existe en nuestra base de datos...');
			$('#lx27').html('Usuario o contraseña incorrecta...');
			$('#lx28').html('Error: no estás registrado...');
		
			$('#lx29').html('Cambiar el idioma de la aplicación:');
			$('#lx30').replaceWith('<div class="ce_search" id="lx30">No hay resultados para esta consulta</div>');
			$('#lx31').replaceWith('<div class="ce" id="lx31">No hay resultados para esta consultay</div>');
			$('#lx32').replaceWith('<div class="ce" id="lx32">Tu biblioteca está vacía</div>');
			$('#lx33').html('Tu biblioteca sin conexión está vacía...');
		
			window.vtxt1 = 'La revista se ha eliminado correctamente de la biblioteca';
			window.vtxt2 = 'Información';
			window.vtxt3 = 'OK';
			window.vtxt4 = 'Revista se agregó correctamente a la biblioteca';
			window.vtxt5 = 'Problema de conexión';
			
			$('.tc_title').replaceWith('<span class="tc_title">Tabla de contenido:</span>');
			
	}
	
	if(localStorage.getItem("language")=='de'){
			
			$('#menu').html('<li><img src="images/top_left_logo.png" width="700" height="220" class="top_left_logo"></li>\
        <li id="l1"><a href="login.html"><img src="images/icon_login.png" width="75" height="75" class="menu_icon"/>Anmelden / Registrieren</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="language.html"><img src="images/icon_lang.png" width="75" height="75" class="menu_icon"/>Sprache</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="library.html"><img src="images/icon_library.png" width="75" height="75" class="menu_icon"/>Ihre bibliothek</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="about.html"><img src="images/icon_about.png" width="75" height="75" class="menu_icon"/>Über die anwendung</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="https://play.google.com/store/apps/details?id=com.MagazineContentApp"><img src="images/icon_rate.png" width="75" height="75" class="menu_icon"/>Bewerten anwendung</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="#" onclick="navigator.app.exitApp();"><img src="images/icon_exit.png" width="75" height="75" class="menu_icon"/>Ausgang</a></li>');
			
			if(localStorage.getItem("mca_access")=='mca_ok!'){
			
				$('#l1').html('<a href="login.html#logout=end"><img src="images/icon_login.png" width="75" height="75" class="menu_icon"/>Ausloggen<div style="color:#FFFFFF; font-size:30px;">'+localStorage.getItem("login")+'</div></a>');	
	
			}
		
			$('#top_sub_txt').html('Suche');
			
			$('#lx1').html('Einloggen in Magazine Content App');
			$('#lx2').html('Anmeldung:');
			$('#lx3').html('Passwort:');
			$('#lx4').html('Neu registrieren');
			$('#lx5').html('Passwort vergessen');
			$('#login').val("Anmeldung");
			
			$('#lx6').html('Registrieren sie sich bei Magazine Content App');
			$('#lx7').html('Anmeldung / Mail:');
			$('#lx8').html('Passwort:');
			$('#lx9').html('Wiederholen:');
			$('#lx10').html('Zurück zur anmeldung');
			$('#register').val("Neu registrieren");
			
			$('#lx11').html('Kennwort vergessen');
			$('#lx12').html('Mail:');
			$('#lx13').html('Zurück zur anmeldung');
			$('#send').val("Senden");
			
			$('#lx14').html('Wählen Sie Ihre Bibliothek aus');
		    $('#lx15').html('Zeitschriften \(registriert & online\)');
		    $('#lx16').html('Artikel \(offline\)');
			$('#lx17').html('Ihre bibliothek');
			$('#lx18').html('Über die anwendung');
		
			$('#error').html('Fehler: Verbindungsproblem...');
			$('#error_search').html('Fehler: Suchbegriff eingeben...');
		    
			$('#lx19').html('Konto wurde erstellt...');
			$('#lx20').html('Diese Mail existiert in unserer datenbank...');
			$('#lx21').html('Passwörter stimmen nicht überein...');
			$('#lx22').html('Falsche Post...');
			$('#lx23').html('Füllen Sie alle Felder aus...');
			$('#lx24').html('Füllen Sie das Login und das passwort...');

			$('#lx25').html('Neues Passwort wurde auf Ihre Mail geschickt...');
			$('#lx26').html('Diese mail existiert nicht in unserer datenbank...');
			$('#lx27').html('Falsche anmeldung oder passwort...');
			$('#lx28').html('Fehler: sie sind nicht angemeldet...');
		
			$('#lx29').html('App-Sprache ändern:');
			$('#lx30').replaceWith('<div class="ce_search" id="lx30">Keine ergebnisse für diese suchanfrage</div>');
			$('#lx31').replaceWith('<div class="ce" id="lx31">Keine ergebnisse für diese suchanfrage</div>');
			$('#lx32').replaceWith('<div class="ce" id="lx32">Ihre bibliothek ist leer</div>');
			$('#lx33').html('Ihre uffline-bibliothek ist leer...');
		
			window.vtxt1 = 'Magazin wurde erfolgreich aus der bibliothek gelöscht';
			window.vtxt2 = 'Information';
			window.vtxt3 = 'OK';
			window.vtxt4 = 'Magazin wurde erfolgreich in die bibliothek aufgenommen';
			window.vtxt5 = 'Verbindungsproblem';
			
			$('.tc_title').replaceWith('<span class="tc_title">Inhaltsverzeichnis:</span>');
			
	}
	
	if(localStorage.getItem("language")=='fr'){
			
			$('#menu').html('<li><img src="images/top_left_logo.png" width="700" height="220" class="top_left_logo"></li>\
        <li id="l1"><a href="login.html"><img src="images/icon_login.png" width="75" height="75" class="menu_icon"/>Connectez-vous/Inscrivez-vous</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="language.html"><img src="images/icon_lang.png" width="75" height="75" class="menu_icon"/>La langue</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="library.html"><img src="images/icon_library.png" width="75" height="75" class="menu_icon"/>Votre bibliothèque</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="about.html"><img src="images/icon_about.png" width="75" height="75" class="menu_icon"/>À propos de l\'application</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="https://play.google.com/store/apps/details?id=com.MagazineContentApp"><img src="images/icon_rate.png" width="75" height="75" class="menu_icon"/>Application de taux</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="#" onclick="navigator.app.exitApp();"><img src="images/icon_exit.png" width="75" height="75" class="menu_icon"/>Sortie</a></li>');
			
			if(localStorage.getItem("mca_access")=='mca_ok!'){
			
				$('#l1').html('<a href="login.html#logout=end"><img src="images/icon_login.png" width="75" height="75" class="menu_icon"/>Connectez - Out<div style="color:#FFFFFF; font-size:30px;">'+localStorage.getItem("login")+'</div></a>');	
	
			}
		
			$('#top_sub_txt').html('Chercher');
			
			$('#lx1').html('Se connecter à Magazine Content App');
			$('#lx2').html('S\'identifier:');
			$('#lx3').html('Mot de passe:');
			$('#lx4').html('Registre');
			$('#lx5').html('Mot de passe oublié');
			$('#login').val("S\'identifier");
			
			$('#lx6').html('Inscrivez-vous à Magazine Content App');
			$('#lx7').html('Courrier:');
			$('#lx8').html('Mot de passe:');
			$('#lx9').html('Répétée:');
			$('#lx10').html('Retour connexion');
			$('#register').val("Registre");
			
			$('#lx11').html('Rappellez le mot de passe');
			$('#lx12').html('Courrier:');
			$('#lx13').html('Retour connexion');
			$('#send').val("Envoyer");
			
			$('#lx14').html('Sélectionnez votre bibliothèque');
		    $('#lx15').html('Magazines \(enregistré et en ligne\)');
		    $('#lx16').html('Articles \(hors ligne\)');
			$('#lx17').html('Votre bibliothèque');
			$('#lx18').html('À propos de l\'application');
		
			$('#error').html('Erreur: problème de connexion...');
			$('#error_search').html('Erreur: Entrez le terme de recherche...');
		    
			$('#lx19').html('Le compte a été créé...');
			$('#lx20').html('Ce courrier existe dans notre base de données...');
			$('#lx21').html('Les mots de passe ne correspondent pas...');
			$('#lx22').html('Courrier incorrect...');
			$('#lx23').html('Remplissez tous les champs...');
			$('#lx24').html('Remplissez le login et le mot de passe...');

			$('#lx25').html('Un nouveau mot de passe a été envoyé sur votre courrier...');
			$('#lx26').html('Ce courrier n\'existe pas dans notre base de données...');
			$('#lx27').html('Identifiant ou mot de passe incorrect...');
			$('#lx28').html('Erreur: Vous n\'êtes pas connecté...');
		
			$('#lx29').html('Changer le langage de l\'application:');
			$('#lx30').replaceWith('<div class="ce_search" id="lx30">Aucun résultat pour cette requête</div>');
			$('#lx31').replaceWith('<div class="ce" id="lx31">Aucun résultat pour cette requête</div>');
			$('#lx32').replaceWith('<div class="ce" id="lx32">Votre bibliothèque est vide</div>');
			$('#lx33').html('Votre bibliothèque hors ligne est vide...');
		
			window.vtxt1 = 'Le magazine a été supprimé avec succès depuis la bibliothèque';
			window.vtxt2 = 'Information';
			window.vtxt3 = 'OK';
			window.vtxt4 = 'Le magazine a été ajouté avec succès à la bibliothèque';
			window.vtxt5 = 'Problème de connection';
			
			$('.tc_title').replaceWith('<span class="tc_title">Table des matières:</span>');
			
	}
	
	if(localStorage.getItem("language")=='gr'){
			
			$('#menu').html('<li><img src="images/top_left_logo.png" width="700" height="220" class="top_left_logo"></li>\
        <li id="l1"><a href="login.html"><img src="images/icon_login.png" width="75" height="75" class="menu_icon"/>Είσοδος / Εγγραφή</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="language.html"><img src="images/icon_lang.png" width="75" height="75" class="menu_icon"/>Γλώσσα</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="library.html"><img src="images/icon_library.png" width="75" height="75" class="menu_icon"/>Η βιβλιοθήκη σας</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="about.html"><img src="images/icon_about.png" width="75" height="75" class="menu_icon"/>Σχετικά με την εφαρμογή</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="https://play.google.com/store/apps/details?id=com.MagazineContentApp"><img src="images/icon_rate.png" width="75" height="75" class="menu_icon"/>εφαρμογή Βαθμολογήστε</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="#" onclick="navigator.app.exitApp();"><img src="images/icon_exit.png" width="75" height="75" class="menu_icon"/>Εξοδος</a></li>');
			
			if(localStorage.getItem("mca_access")=='mca_ok!'){
			
				$('#l1').html('<a href="login.html#logout=end"><img src="images/icon_login.png" width="75" height="75" class="menu_icon"/>Αποσυνδέση<div style="color:#FFFFFF; font-size:30px;">'+localStorage.getItem("login")+'</div></a>');	
	
			}
		
			$('#top_sub_txt').html('Ψάξιμο');
			
			$('#lx1').html('Είσοδος στο Magazine Content App');
			$('#lx2').html('Σύνδεση:');
			$('#lx3').html('Κωδικός:');
			$('#lx4').html('μητρώο');
			$('#lx5').html('Ξεχάσατε τον κωδικό');
			$('#login').val("Σύνδεση");
			
			$('#lx6').html('Εγγραφή στο Magazine Content App');
			$('#lx7').html('Ταχυδρομ.:');
			$('#lx8').html('Κωδικός:');
			$('#lx9').html('Επαναλ.:');
			$('#lx10').html('Πίσω');
			$('#register').val("μητρώο");
			
			$('#lx11').html('Υπενθύμιση κωδικού');
			$('#lx12').html('Ταχυδρομείο:');
			$('#lx13').html('Πίσω');
			$('#send').val("Στείλετε");
			
			$('#lx14').html('Επιλέξτε τη βιβλιοθήκη σας');
		    $('#lx15').html('Περιοδικά \(εγγεγραμμένο σε απευθείας σύνδεση\)');
		    $('#lx16').html('άρθρα \(offline\)');
			$('#lx17').html('Η βιβλιοθήκη σας');
			$('#lx18').html('Σχετικά με την εφαρμογή');
		
			$('#error').html('Σφάλμα: Πρόβλημα σύνδεσης...');
			$('#error_search').html('Σφάλμα: Εισάγετε τον όρο αναζήτησης...');
		    
			$('#lx19').html('Ο λογαριασμός έχει δημιουργηθεί...');
			$('#lx20').html('Αυτό το μήνυμα υπάρχει στη βάση δεδομένων μας...');
			$('#lx21').html('Οι κωδικοί πρόσβασης δεν ταιριάζουν...');
			$('#lx22').html('Λανθασμένη ταχυδρομείου...');
			$('#lx23').html('Συμπληρώστε όλα τα πεδία...');
			$('#lx24').html('Συμπληρώστε το όνομα χρήστη και τον κωδικό πρόσβασης...');

			$('#lx25').html('Νέος κωδικός έχει αποσταλεί στο email σας...');
			$('#lx26').html('Αυτό το μήνυμα δεν υπάρχει στη βάση δεδομένων μας...');
			$('#lx27').html('Λανθασμένη σύνδεση ή τον κωδικό πρόσβασης...');
			$('#lx28').html('Σφάλμα: Δεν έχετε συνδεθεί...');
		
			$('#lx29').html('Αλλαγή γλώσσας app:');
			$('#lx30').replaceWith('<div class="ce_search" id="lx30">Δεν υπάρχουν αποτελέσματα για αυτό το ερώτημα</div>');
			$('#lx31').replaceWith('<div class="ce" id="lx31">Δεν υπάρχουν αποτελέσματα για αυτό το ερώτημα</div>');
			$('#lx32').replaceWith('<div class="ce" id="lx32">Η βιβλιοθήκη σας είναι άδειο</div>');
			$('#lx33').html('βιβλιοθήκη χωρίς σύνδεση σας είναι άδειο...');
		
			window.vtxt1 = 'Το περιοδικό είχε διαγράψει με επιτυχία από τη βιβλιοθήκη';
			window.vtxt2 = 'Πληροφορίες';
			window.vtxt3 = 'OK';
			window.vtxt4 = 'Περιοδικό προστέθηκε με επιτυχία στη βιβλιοθήκη';
			window.vtxt5 = 'Πρόβλημα σύνδεσης';
			
			$('.tc_title').replaceWith('<span class="tc_title">Πίνακας περιεχομένων:</span>');
			
	}
	
	if(localStorage.getItem("language")=='ru'){
			
			$('#menu').html('<li><img src="images/top_left_logo.png" width="700" height="220" class="top_left_logo"></li>\
        <li id="l1"><a href="login.html"><img src="images/icon_login.png" width="75" height="75" class="menu_icon"/>Вход / Регистрация</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="language.html"><img src="images/icon_lang.png" width="75" height="75" class="menu_icon"/>Язык</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="library.html"><img src="images/icon_library.png" width="75" height="75" class="menu_icon"/>Ваша библиотека</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="about.html"><img src="images/icon_about.png" width="75" height="75" class="menu_icon"/>О приложении</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="https://play.google.com/store/apps/details?id=com.MagazineContentApp"><img src="images/icon_rate.png" width="75" height="75" class="menu_icon"/>Подать заявку</a></li>\
        <li><div class="menu_line"></div></li>\
        <li><a href="#" onclick="navigator.app.exitApp();"><img src="images/icon_exit.png" width="75" height="75" class="menu_icon"/>Выход</a></li>');
			
			if(localStorage.getItem("mca_access")=='mca_ok!'){
			
				$('#l1').html('<a href="login.html#logout=end"><img src="images/icon_login.png" width="75" height="75" class="menu_icon"/>Выйти<div style="color:#FFFFFF; font-size:30px;">'+localStorage.getItem("login")+'</div></a>');	
	
			}
		
			$('#top_sub_txt').html('Поиск');
			
			$('#lx1').html('Войти в Magazine Content App');
			$('#lx2').html('Автори.:');
			$('#lx3').html('пароль:');
			$('#lx4').html('регистр');
			$('#lx5').html('Забыли пароль');
			$('#login').val("Автори.");
			
			$('#lx6').html('Зарегистрировать приложение для журнала');
			$('#lx7').html('Почта:');
			$('#lx8').html('пароль:');
			$('#lx9').html('Повторе.:');
			$('#lx10').html('Вернуться');
			$('#register').val("регистр");
			
			$('#lx11').html('Напомнить пароль');
			$('#lx12').html('Почта:');
			$('#lx13').html('Вернуться');
			$('#send').val("послать");
			
			$('#lx14').html('Выберите свою библиотеку');
		    $('#lx15').html('Журналы \(зарегистрированные и онлайн\)');
		    $('#lx16').html('Статьи \(офлайн\)');
			$('#lx17').html('Ваша библиотека');
			$('#lx18').html('О приложении');
		
			$('#error').html('Ошибка: проблема подключения...');
			$('#error_search').html('Ошибка: введите условие поиска...');
		    
			$('#lx19').html('Аккаунт создан...');
			$('#lx20').html('Эта почта есть в нашей базе данных...');
			$('#lx21').html('Пароли не совпадают...');
			$('#lx22').html('Неправильная почта...');
			$('#lx23').html('Заполните все поля...');
			$('#lx24').html('Заполните логин и пароль...');

			$('#lx25').html('Новый пароль был отправлен на вашу почту...');
			$('#lx26').html('Эта почта не существует в нашей базе данных...');
			$('#lx27').html('неверный логин или пароль...');
			$('#lx28').html('Ошибка: вы не являетесь пользователем...');
		
			$('#lx29').html('Изменение языка приложения:');
			$('#lx30').replaceWith('<div class="ce_search" id="lx30">Нет результатов по этому запросу</div>');
			$('#lx31').replaceWith('<div class="ce" id="lx31">Нет результатов по этому запросу</div>');
			$('#lx32').replaceWith('<div class="ce" id="lx32">Ваша библиотека пуста</div>');
			$('#lx33').html('Ваша автономная библиотека пуста...');
		
			window.vtxt1 = 'Журнал успешно удален из библиотеки';
			window.vtxt2 = 'Информация';
			window.vtxt3 = 'OK';
			window.vtxt4 = 'Журнал успешно добавлен в библиотеку';
			window.vtxt5 = 'Проблема соединения';
			
			$('.tc_title').replaceWith('<span class="tc_title">Содержание:</span>');
			
	}
}


$(document).ready(function(){
    
	var app_lang = localStorage.getItem("language");	
	if(!app_lang || app_lang == 'null' || app_lang == '' || app_lang == 'false' || app_lang == 'undefined'){ window.localStorage.setItem("language","en"); } 
	
	changeLang(localStorage.getItem("language"));		

}); 