import { React, useState, useEffect } from "react";
import { TableauRepertoire } from "../composants/TableauRepertoire";
import { repertoire } from "../repertoire";

export const PageAdmin = () => {
    const [repertoires, setRepertoires] = useState(repertoire.sort((a, b) => a.categorie.localeCompare(b.categorie)));
    useEffect(() => {
        const chercherRepertoires = async () => {
            const body = await fetch('/api/pieces').then(resultat => resultat.json());
            setRepertoires(body.sort((a, b) => a.categorie.localeCompare(b.categorie)))
        };
        chercherRepertoires();
    }, []);

    return (
        <main>
            <h2 className="text-center">Admin</h2>
            <TableauRepertoire repertoires={repertoires} buttons />
        </main>
    )
}