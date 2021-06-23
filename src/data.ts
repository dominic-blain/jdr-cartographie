export type Tile = [number, number, string, object?]

const tiles: Tile[] = [

    // ROW: 8
    [8, 35, 'water'],
    [8, 36, 'water'],
    [8, 37, 'shore'],
    [8, 38, 'shore'],
    [8, 39, 'water'],
    [8, 40, 'water'],
    [8, 41, 'water'],
    [8, 42, 'shore'],
    [8, 43, 'shore'],
    [8, 44, 'shore'],
    [8, 45, 'water'],

    // ROW: 9
    [9, 35, 'shore'],
    [9, 36, 'shore'],
    [9, 37, 'shore'],
    [9, 38, 'shore'],
    [9, 39, 'shore'],
    [9, 40, 'shore'],
    [9, 41, 'shore'],
    [9, 42, 'shore'],
    [9, 43, 'forest'],
    [9, 44, 'shore'],
    [9, 45, 'shore'],

    // ROW: 10
    [10, 35, 'shore'],
    [10, 36, 'forest'],
    [10, 37, 'forest'],
    [10, 38, 'forest'],
    [10, 39, 'forest'],
    [10, 40, 'forest'],
    [10, 41, 'forest'],
    [10, 42, 'forest'],
    [10, 43, 'forest'],
    [10, 44, 'forest'],
    [10, 45, 'forest'],

    // ROW: 11
    [11, 35, 'forest'],
    [11, 36, 'forest'],
    [11, 37, 'forest'],
    [11, 38, 'forest'],
    [11, 39, 'forest'],
    [11, 40, 'forest'],
    [11, 41, 'forest'],
    [11, 42, 'forest'],
    [11, 43, 'forest'],
    [11, 44, 'forest'],
    [11, 45, 'forest'],

    // ROW: 12
    [12, 35, 'forest'],
    [12, 36, 'forest'],
    [12, 37, 'forest'],
    [12, 38, 'forest'],
    [12, 39, 'forest'],
    [12, 40, 'forest'],
    [12, 41, 'forest'],
    [12, 42, 'forest'],
    [12, 43, 'forest'],
    [12, 44, 'forest'],
    [12, 45, 'forest'],

    // ROW: 13
    [13, 35, 'forest'],
    [13, 36, 'forest'],
    [13, 37, 'forest'],
    [13, 38, 'forest'],
    [13, 39, 'forest'],
    [13, 40, 'npc', {
        nom: 'Messager',
        race: 'Humain',
        sexe: 'Male',
        taille: 'Petit',
        sante: 'En pleine forme',
        description: 'Description indisponible'
    }],
    [13, 41, 'plain'],
    [13, 42, 'plain'],
    [13, 43, 'forest'],
    [13, 44, 'forest'],
    [13, 45, 'forest'],

    // ROW: 14
    [14, 35, 'forest'],
    [14, 36, 'forest'],
    [14, 37, 'forest'],
    [14, 38, 'forest'],
    [14, 39, 'forest'],
    [14, 40, 'plain'],
    [14, 41, 'plain'],
    [14, 42, 'plain'],
    [14, 43, 'forest'],
    [14, 44, 'forest'],
    [14, 45, 'forest'],

    // ROW: 15
    [15, 35, 'forest'],
    [15, 36, 'forest'],
    [15, 37, 'forest'],
    [15, 38, 'forest'],
    [15, 39, 'plain'],
    [15, 40, 'plain'],
    [15, 41, 'building', {
        type: 'Forge'
    }],
    [15, 42, 'plain'],
    [15, 43, 'plain'],
    [15, 44, 'plain'],
    [15, 45, 'forest'],

    // ROW: 16
    [16, 35, 'forest'],
    [16, 36, 'forest'],
    [16, 37, 'forest'],
    [16, 38, 'plain'],
    [16, 39, 'npc', {
        nom: 'Recruteur',
        race: 'Elfe',
        sexe: 'Male',
        taille: 'Moyen',
        sante: 'En pleine forme',
        description: 'Description indisponible'
    }],
    [16, 40, 'plain'],
    [16, 41, 'npc', {
        nom: 'Maitre des arenes',
        race: 'Elfe',
        sexe: 'Male',
        taille: 'Moyen',
        sante: 'En pleine forme',
        description: 'Description indisponible'
    }],
    [16, 42, 'plain'],
    [16, 43, 'building', {
        type: 'Reliquaire'
    }],
    [16, 44, 'plain'],
    [16, 45, 'forest'],

    // ROW: 17
    [17, 35, 'forest'],
    [17, 36, 'forest'],
    [17, 37, 'plain'],
    [17, 38, 'plain'],
    [17, 39, 'plain'],
    [17, 40, 'plain'],
    [17, 41, 'plain'],
    [17, 42, 'plain'],
    [17, 43, 'plain'],
    [17, 44, 'forest'],
    [17, 45, 'forest'],

    // ROW: 18
    [18, 35, 'forest'],
    [18, 36, 'forest'],
    [18, 37, 'plain'],
    [18, 38, 'plain'],
    [18, 39, 'plain'],
    [18, 40, 'building', {
        type: 'Apothicaire'
    }],
    [18, 41, 'plain'],
    [18, 42, 'forest'],
    [18, 43, 'plain'],
    [18, 44, 'forest'],
    [18, 45, 'forest'],

    // ROW: 19
    [19, 35, 'forest'],
    [19, 36, 'forest'],
    [19, 37, 'plain'],
    [19, 38, 'plain'],
    [19, 39, 'forest'],
    [19, 40, 'plain'],
    [19, 41, 'plain'],
    [19, 42, 'plain'],
    [19, 43, 'building', {
        type: 'Taverne'
    }],
    [19, 44, 'forest'],
    [19, 45, 'forest'],

    // ROW: 20
    [20, 35, 'forest'],
    [20, 36, 'forest'],
    [20, 37, 'plain'],
    [20, 38, 'plain'],
    [20, 39, 'plain'],
    [20, 40, 'plain'],
    [20, 41, 'plain'],
    [20, 42, 'plain'],
    [20, 43, 'plain'],
    [20, 44, 'forest'],
    [20, 45, 'forest'],
]

export default tiles
