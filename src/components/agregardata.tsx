import { addDoc, collection, } from "firebase/firestore"
import { db } from "../firebase/firebase-config"
import { ejercicios} from "../data";

const productCollection = collection(db, "ejercicios");

export const uploadProducts  = async () => {
    for (const product of ejercicios){
        await addDoc(productCollection,product)
    }
    console.log("Productos agregados exitosamente")
}
uploadProducts()