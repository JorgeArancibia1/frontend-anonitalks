import React from 'react';
import { Navbar } from '../../components/ui/Navbar';

export const AboutScreen = () => {
	return (
		<div className="container-flex-center flex-d-c">
			<Navbar />
			<div className="container-flex-center flex-d-c p-5 m-5 c-70w">
				<center>
					<h1 className="fs-xl py-3">Anonitalks</h1>
					<hr />
					<h4 className="mt-4" >
						<p>
							Es una red social orientada a personas que buscan compartir
							experiencias, soluciones a problemas de distinto tipo,
							pensamientos compartir ideas o simplemente, para conocer personas
							nuevas, esta web pretende realizar conexiones con las personas
							adecuadas y así brindar ayuda a quien lo necesite, de forma
							anónima, sin necesidad de exponer su identidad totalmente, lo que
							permite poder generar nuevas amistades, ampliar su red de
							contactos o simplemente pasar el rato compartiendo con personas
							que pueden ser conocidos o no, eso nadie lo sabe. :3{' '}
						</p>
					</h4>
					<br />

					<p className="fs-l py-3">¿Cuál es el objetivo de la página?</p>
					<br />
					<p>
						Romper con estereotipos físicos, en donde se necesita tener un
						físico atractivo para poder causar una buena primera impresión ante
						los demás, perder los prejuicios ante la gente, ya que, muchas
						personas pierden el recibir un buen consejo solo por la persona que
						se lo dice, y por último, y no menos importante, brindar contención
						a personas que necesitan ser escuchadas, sobre todo en estos tiempos
						difíciles en que nos encontramos, evitando así, la alta cantidad de
						suicidios que ocurren por año.
					</p>
				</center>
			</div>
		</div>
	);
};
