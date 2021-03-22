import React from "react";
import Navbar from "../Component/Navbar";
import styles from "../styles/Home.module.css";

export default function Detail() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <img
          src="/news.jpg"
          style={{ width: "100%", height: "500px", borderRadius: "10px" }}
        />
        <div className={styles.detail}>
          <p className={styles.persD}>
            Siaran Pers : Pengembangan Pariwisata Jabar Kedepankan Konsep
            Kultural dan Ecotourism
          </p>
          <div className="d-flex">
            <p className={styles.subD}>2021-03-21</p>
            <p>Posted by Kemenparekraf/ Baparekraf RI</p>
          </div>
          <p>
            Bandung, 21 Maret 2021 - Menteri Pariwisata dan Ekonomi
            Kreatif/Kepala Badan Pariwisata dan Ekonomi Kreatif, Sandiaga
            Salahuddin Uno, menyatakan pihaknya akan mengembangkan sektor
            pariwisata di Jawa Barat dengan mengedepankan konsep kultural dan
            ecotourism atau wisata berbasis alam. Dalam pembukaan Jabar Culture
            and Tourism Festival yang diselenggarakan secara daring, Minggu
            (21/3/2021), Sandiaga mengatakan Provinsi Jawa Barat memiliki
            potensi wisata kultural yang dapat dipadukan dengan keindahan alam
            yang ada di sana. Untuk itu, perlu ada perbaikan titik akses untuk
            wisata. "Kami akan berkoordinasi dengan Pak Gubernur (Jawa Barat),
            Kementerian PUPR, Kementerian Koordinator Bidang Maritim dan
            Investasi, dan Kementerian BUMN. Karena banyak titik wisata yang ada
            di bawah penguasaan BUMN sebagai aset-aset milik negara," kata
            Sandiaga. Oleh karena itu, lanjut Sandiaga, pihaknya kini tengah
            menyelesaikan Memorandum of Understanding (MoU) dengan Kementerian
            BUMN. Dengan harapan agar potensi-potensi pariwisata yang ada
            tersebut bisa segera dikembangkan. Sandiaga menuturkan pihaknya akan
            memulai pengembangan dan pembangunan destinasi-destinasi wisata di
            Jawa Barat yang terbengkalai. "Sehingga nantinya destinasi-destinasi
            ini akan menjadi destinasi yang bertaraf nasional dan
            internasional," katanya. Selain itu, Sandiaga juga mengungkapkan
            pihaknya akan mengembangkan tiga Kawasan Ekonomi Khusus (KEK) di
            Jawa Barat sebagai upaya memulihkan ekonomi nasional dan
            mengembangkan sektor pariwisata dan ekonomi kreatif di Jawa Barat.
            "Salah satu dari tiga KEK yang telah berhasil kita dorong dengan
            kemajuan yang signifikan yaitu Lido dan kami akan mengembangkan KEK
            di Cikidang, Sukabumi, serta Pangandaran," ujar Sandiaga
          </p>
        </div>
      </div>
    </div>
  );
}
