import React, { useState } from 'react';

const Cloudinary: React.FC = () => {

    const preset_name = "my-upload-preset";           
    const cloud_name = "dzubhlegp";          

    const [image, setImage] = useState<string>('');       
    const [loading, setLoading] = useState<boolean>(false); 

    const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {    
        const files = e.target.files;       
        if (!files || files.length === 0) {
            return;
        }
        const data = new FormData();        
        data.append('file', files[0]);      
        data.append('upload_preset', preset_name);  

        setLoading(true);                   

        try {
            const response = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
                method: 'POST',
                body: data
            });

            const file = await response.json();  

            if (file.secure_url) {
                setImage(file.secure_url);              
                alert(`Imagen subida correctamente! URL: ${file.secure_url}`);
            } else {
                throw new Error('URL de imagen no encontrada en la respuesta');
            }

            setLoading(false);                    
        } catch (error) {
            console.error('Error al subir la imagen:', error);
            alert('Hubo un error al subir la imagen.');
            setLoading(false);
        }
    }

    return (
        <div>
            <h1>Upload Image</h1>
            <input
                type="file"
                name="file"
                placeholder="Upload an image"
                onChange={(e) => uploadImage(e)}
            />
            {loading ? (
                <h3>Loading...</h3>
            ) : (
                image && <img src={image} alt="imagen subida" />
            )}
        </div>
    );
}

export default Cloudinary;
