import React, {useState} from "react";
import Layout from "../komponen/Layout";

const EvenHandling = () => {
    const [formData, setFormData] = useState({
        Nama: '',
        Alamat: '',
        ProgramStudi: '',
        Gender: '',
        Prestasi:'',
        Masukkan:''
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <Layout>
            <div className="container mt-4 ml-4">
                <h3 className="text-2xl font-bold">Form Pendaftaran</h3>
                <hr />

                <div className="=flex flex-row mt-4">
                    <div className="w-1/2 md:w-7/12 pr-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                                Nama Lengkap:
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="shadow aprearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Masukkan nama lengkap anda"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="alamat" className="block text-gray-700 font-bold mb-2">
                                Alamat:
                            </label>
                            <input
                                type="text"
                                id="alamat"
                                name="alamat"
                                className="shadow aprearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Masukkan alamat anda"
                                value={formData.alamat}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="ProgramStudi" className="block text-gray-700 font-bold mb-2">
                                Program Studi:
                            </label>
                            <select
                                id="ProgramStudi"
                                name="ProgramStudi"
                                className="shadow aprearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={formData.ProgramStudi}
                                onChange={handleChange}
                            >
                                <option value="">Pilih Program Studi</option>
                                <option value="S1 Teknik Informatika">S1 Teknik Informatika</option>
                                <option value="D3 Manajemen Informatika">D3 Manajemen Informatika</option>
                            </select>
                        </div>

                        <div className="mt-6">
                            <span className="block text-gray-700 font-bold mb-2">Gender:</span>
                            <div className="flex flex-row items-center mr-6">
                                <label className="inline-flex items-center mr-6">
                                    <input
                                        type="radio"
                                        className="form-radio text-indigo-600"
                                        name="pria"
                                        value="Pria"
                                        checked={formData.gender === 'Pria'}
                                        onChange={handleChange}
                                    />
                                    <span className="ml-2">Pria</span>
                                </label>
                                <label className="inline-flex items-center mr-6">
                                    <input
                                        type="radio"
                                        className="form-radio text-indigo-600"
                                        name="gender"
                                        value="Wanita"
                                        checked={formData.gender === 'Wanita'}
                                        onChange={handleChange}
                                    />
                                    <span className="ml-2">Wanita</span>
                                </label>
                            </div>
                        </div>
                        <div className="mt-6">
                            <span className="block text-gray-700 font-bold mb-2">Prestasi:</span>
                            <div className="flex flex-row items-center mr-6">
                                <label className="inline-flex items-center mr-6">
                                    <input
                                        type="radio"
                                        className="form-radio text-indigo-600"
                                        name="Prestasi"
                                        value="Akademik"
                                        checked={formData.Prestasi === 'Akademik'}
                                        onChange={handleChange}
                                    />
                                    <span className="ml-2">Akademik</span>
                                </label>
                                <label className="inline-flex items-center mr-6">
                                    <input
                                        type="radio"
                                        className="form-radio text-indigo-600"
                                        name="Prestasi"
                                        value="Non AKademik"
                                        checked={formData.Prestasi === 'Non AKademik'}
                                        onChange={handleChange}
                                    />
                                    <span className="ml-2">Non Akademik</span>
                                </label>
                            </div>

                            <div className="mt-4">
                                <label htmlFor="masukkan" className="block text-gray-700 font-bold mb-2">
                                    Masukkan:
                                </label>
                                <textarea
                                    id="Masukkan"
                                    name="Masukkan"
                                    className="shadow apprearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Masukkan pendapat anda"
                                    value={formData.Masukkan}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="w-1/2 md:w-5/12 pl-4">
                            <h3 className="text-2xl font-bold">Resume</h3>
                            <hr />
                            <h5 className="mb-2">Nama: {formData.name}</h5>
                            <h5 className="mb-2">Alamat: {formData.alamat}</h5>
                            <h5 className="mb-2">Program Studi: {formData.ProgramStudi}</h5>
                            <h5 className="mb-2">Gender: {formData.gender}</h5>
                            <h5 className="mb-2">Prestasi: {formData.Prestasi}</h5>
                            <h5 className="mb-2">Masukkan: {formData.Masukkan}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default EvenHandling;