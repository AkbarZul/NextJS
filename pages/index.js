import Head from "next/head";
import Navbar from "../Component/Navbar";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { Carousel } from "react-bootstrap";
import Link from 'next/link';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="/carousel1.jpg"
            alt="First slide"
            style={{ height: "600px" }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="/carousel2.jpg"
            alt="Second slide"
            style={{ height: "600px" }}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/carousel3.jpg"
            alt="Third slide"
            style={{ height: "600px" }}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center" style={{marginTop: '155px'}}>
          <div>
            <p className={styles.berita}>Berita Terbaru</p>
          </div>

          <div className={styles.lihat}>Lihat Selengkapnya</div>
        </div>

        <div className={styles.kartu}>
          <div>
            <div>
              <Link href={'/Detail'}>
              <p className={styles.pers}>
              Siaran Pers : Pengembangan Pariwisata Jabar Kedepankan Konsep Kultural dan Ecotourism
              </p>
              </Link>
              <p>
              2021-03-21 Posted by Kemenparekraf/ Baparekraf RI
              </p>
            </div>
            <div>
              <img src="/carousel1.jpg" style={{width: '100%', height: '500px', borderRadius: '10px'}} />
            </div>
            <p className={styles.kata}>
            Bandung, 21 Maret 2021 - Menteri Pariwisata dan Ekonomi Kreatif/Kepala Badan Pariwisata dan Ekonomi Kreatif, Sandiaga Salahuddin Uno, menyatakan pihaknya akan mengembangkan sektor pariwisata di Jawa Barat dengan mengedepankan konsep kultural dan ecotourism atau wisata berbasis alam....
            </p>
          </div>
        </div>
      </div>
    </>
  );
}


// 2021-03-21
// Posted by Kemenparekraf/ Baparekraf RI
// 18
// Bandung, 21 Maret 2021 - Menteri Pariwisata dan Ekonomi Kreatif/Kepala Badan Pariwisata dan Ekonomi Kreatif, Sandiaga Salahuddin Uno, menyatakan pihaknya akan mengembangkan sektor pariwisata di Jawa Barat dengan mengedepankan konsep kultural dan ecotourism atau wisata berbasis alam....