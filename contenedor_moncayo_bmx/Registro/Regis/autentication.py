from email.message import EmailMessage
import ssl
import smtplib 

def autenticacion(email_receiver,usuario,date,contra):
    temp = 'index.html'
    # Define email sender and receiver
    email_sender = 'sssolutionsmx@gmail.com'
    email_password = 'pvphxzeftorgbqgz'
    user = usuario + date[0:4]
    # Set the subject and body of the email
    subject = 'Bienvenido'
    body = """
    Bienvenido barber@ tu user es:
    """  +  user + "y tu contraseña es" + contra
    
    em = EmailMessage()
    em['From'] = email_sender
    em['To'] = email_receiver
    em['Subject'] = subject
    em.set_content(body)
    
    # Add SSL (layer of security)
    context = ssl.create_default_context()
    
    # Log in and send the email
    with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
        smtp.login(email_sender, email_password)
        smtp.sendmail(email_sender, email_receiver, em.as_string())
    #return render (request,temp)
