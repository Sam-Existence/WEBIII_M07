import React from "react";
import Table from 'react-bootstrap/Table';
import { RangeeRepertoire } from "./RangeeRepertoire";

export const TableauRepertoire = ({ repertoires, buttons=false }) => {
    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Titre</th>
                    <th>Artiste</th>
                    <th>Catégorie</th>
                    {buttons ? <th></th> : <></>}
                </tr>
            </thead>
            <tbody>
                {repertoires.map(repertoire => 
                    <RangeeRepertoire 
                        key={`${repertoire.titre}_${repertoire.artiste}`}
                        repertoire={repertoire}
                        buttons={buttons}
                    />)}
            </tbody>
        </Table>
    );
}