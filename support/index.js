module.exports.getExe = async (req, res) => {
    try {

        const file = getExeFilePath(req.params.filename)

        if (!fs.existsSync(file.path)) {

            res.status(200).json({ 'status': false, 'result': 'File not found!' })

        } else {

            res.setHeader('Content-disposition', 'attachment; filename=' + file.name);
            //filename is the name which client will see. Don't put full path here.

            res.setHeader('Content-type', file.type);

            var sendFile = fs.createReadStream(file.path);

            sendFile.pipe(res);
        }
    } catch (error) {
        console.log(error)
        res.status(200).json({ 'status': false, 'result': 'Failed!' });
    }
}
// Import commands.js using ES2015 syntax:
import './commands'

