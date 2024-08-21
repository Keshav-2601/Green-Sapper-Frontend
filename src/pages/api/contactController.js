import contactRepository from "./contactRepository.js";
export default class ContactController {
    async getcontact(res, req) {
        try {
            const details = {
                name: req.body.name,
                email: req.body.email,
                message: req.body.message
            }
            await contactRepository.getdata(details);
            const result=res;
            console.log(result);
    } catch (err) {
            console.log("error is ", err);
        }


    }
}