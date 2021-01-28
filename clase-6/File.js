"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var File = /** @class */ (function () {
    function File(filename) {
        this.filename = filename;
    }
    File.prototype.read = function () {
        try {
            var readFile = fs_1.default.readFileSync("./clase-7/" + this.filename, 'utf-8');
            return readFile ? readFile : '[]';
        }
        catch (error) {
            console.log(error);
        }
    };
    File.prototype.writeAndSave = function (arr) {
        try {
            fs_1.default.writeFileSync("./clase-7/" + this.filename, JSON.stringify([arr]));
        }
        catch (error) {
            console.log('El archivo no se pudo crear', error);
        }
    };
    File.prototype.append = function (arr, product) {
        try {
            var arrParse = JSON.parse(arr);
            product.id = arrParse.length + 1;
            arrParse = __spreadArrays(arrParse, [
                product
            ]);
            fs_1.default.writeFileSync("./clase-7/" + this.filename, JSON.stringify(arrParse));
        }
        catch (error) {
            console.log('El archivo no existe!', error);
        }
    };
    File.prototype.delete = function () {
        try {
            fs_1.default.unlinkSync("./clase-6/" + this.filename);
            console.log('Archivo eliminado!!');
        }
        catch (error) {
            console.log('El archivo no existe!', error);
        }
    };
    return File;
}());
exports.default = File;
