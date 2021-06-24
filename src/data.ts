export type Tile = [number, number, string, object?]

const tiles: Tile[] = [

    // ROW: 7
    [7, 37, 'eau'],
    [7, 38, 'eau'],
    [7, 39, 'eau'],
    [7, 40, 'eau'],
    [7, 41, 'eau'],
    [7, 42, 'eau'],
    [7, 43, 'eau'],

    // ROW: 8
    [8, 35, 'eau'],
    [8, 36, 'eau'],
    [8, 37, 'rive'],
    [8, 38, 'rive'],
    [8, 39, 'eau'],
    [8, 40, 'eau'],
    [8, 41, 'eau'],
    [8, 42, 'rive'],
    [8, 43, 'rive'],
    [8, 44, 'rive'],
    [8, 45, 'eau'],

    // ROW: 9
    [9, 35, 'rive'],
    [9, 36, 'rive'],
    [9, 37, 'rive'],
    [9, 38, 'rive'],
    [9, 39, 'rive'],
    [9, 40, 'rive'],
    [9, 41, 'rive'],
    [9, 42, 'rive'],
    [9, 43, 'foret'],
    [9, 44, 'rive'],
    [9, 45, 'rive'],

    // ROW: 10
    [10, 35, 'rive'],
    [10, 36, 'foret'],
    [10, 37, 'foret'],
    [10, 38, 'foret'],
    [10, 39, 'foret'],
    [10, 40, 'foret'],
    [10, 41, 'foret'],
    [10, 42, 'foret'],
    [10, 43, 'foret'],
    [10, 44, 'foret'],
    [10, 45, 'foret'],
    [10, 46, 'rive'],

    // ROW: 11
    [11, 35, 'foret'],
    [11, 36, 'foret'],
    [11, 37, 'foret'],
    [11, 38, 'foret'],
    [11, 39, 'foret'],
    [11, 40, 'foret'],
    [11, 41, 'foret'],
    [11, 42, 'foret'],
    [11, 43, 'foret'],
    [11, 44, 'foret'],
    [11, 45, 'foret'],
    [11, 46, 'rive'],
    [11, 47, 'rive'],

    // ROW: 12
    [12, 35, 'foret'],
    [12, 36, 'foret'],
    [12, 37, 'foret'],
    [12, 38, 'foret'],
    [12, 39, 'foret'],
    [12, 40, 'foret'],
    [12, 41, 'foret'],
    [12, 42, 'foret'],
    [12, 43, 'foret'],
    [12, 44, 'foret'],
    [12, 45, 'foret'],
    [12, 46, 'foret'],
    [12, 47, 'foret'],

    // ROW: 13
    [13, 35, 'foret'],
    [13, 36, 'foret'],
    [13, 37, 'foret'],
    [13, 38, 'foret'],
    [13, 39, 'foret'],
    [13, 40, 'NPC', {
        nom: 'Messager',
        race: 'Humain',
        sexe: 'Male',
        taille: 'Petit',
        sante: 'En pleine forme',
        description: 'Description indisponible'
    }],
    [13, 41, 'plaine'],
    [13, 42, 'plaine'],
    [13, 43, 'foret'],
    [13, 44, 'foret'],
    [13, 45, 'foret'],
    [13, 46, 'foret'],
    [13, 47, 'foret'],

    // ROW: 14
    [14, 35, 'foret'],
    [14, 36, 'foret'],
    [14, 37, 'foret'],
    [14, 38, 'foret'],
    [14, 39, 'foret'],
    [14, 40, 'plaine'],
    [14, 41, 'plaine'],
    [14, 42, 'plaine'],
    [14, 43, 'foret'],
    [14, 44, 'foret'],
    [14, 45, 'foret'],
    [14, 46, 'foret'],
    [14, 47, 'foret'],

    // ROW: 15
    [15, 35, 'foret'],
    [15, 36, 'foret'],
    [15, 37, 'foret'],
    [15, 38, 'foret'],
    [15, 39, 'plaine'],
    [15, 40, 'plaine'],
    [15, 41, 'batiment', {
        type: 'Forge'
    }],
    [15, 42, 'plaine'],
    [15, 43, 'plaine'],
    [15, 44, 'plaine'],
    [15, 45, 'foret'],
    [15, 46, 'foret'],
    [15, 47, 'foret'],

    // ROW: 16
    [16, 35, 'foret'],
    [16, 36, 'foret'],
    [16, 37, 'foret'],
    [16, 38, 'plaine'],
    [16, 39, 'NPC', {
        nom: 'Recruteur',
        race: 'Elfe',
        sexe: 'Male',
        taille: 'Moyen',
        sante: 'En pleine forme',
        description: 'Description indisponible'
    }],
    [16, 40, 'plaine'],
    [16, 41, 'NPC', {
        nom: 'Maitre des arenes',
        race: 'Elfe',
        sexe: 'Male',
        taille: 'Moyen',
        sante: 'En pleine forme',
        description: 'Description indisponible'
    }],
    [16, 42, 'plaine'],
    [16, 43, 'batiment', {
        type: 'Reliquaire'
    }],
    [16, 44, 'plaine'],
    [16, 45, 'foret'],
    [16, 46, 'foret'],
    [16, 47, 'foret'],

    // ROW: 17
    [17, 35, 'foret'],
    [17, 36, 'foret'],
    [17, 37, 'foret'],
    [17, 38, 'plaine'],
    [17, 39, 'plaine'],
    [17, 40, 'plaine'],
    [17, 41, 'plaine'],
    [17, 42, 'plaine'],
    [17, 43, 'plaine'],
    [17, 44, 'plaine'],
    [17, 45, 'foret'],
    [17, 46, 'foret'],
    [17, 47, 'foret'],

    // ROW: 18
    [18, 35, 'foret'],
    [18, 36, 'foret'],
    [18, 37, 'foret'],
    [18, 38, 'plaine'],
    [18, 39, 'plaine'],
    [18, 40, 'batiment', {
        type: 'Apothicaire'
    }],
    [18, 41, 'plaine'],
    [18, 42, 'foret'],
    [18, 43, 'plaine'],
    [18, 44, 'plaine'],
    [18, 45, 'foret'],
    [18, 46, 'foret'],
    [18, 47, 'foret'],

    // ROW: 19
    [19, 36, 'foret'],
    [19, 37, 'foret'],
    [19, 38, 'plaine'],
    [19, 39, 'plaine'],
    [19, 40, 'foret'],
    [19, 41, 'plaine'],
    [19, 42, 'plaine'],
    [19, 43, 'batiment', {
        type: 'Taverne'
    }],
    [19, 44, 'plaine'],
    [19, 45, 'foret'],
    [19, 46, 'foret'],
    [19, 47, 'foret'],

    // ROW: 20
    [20, 36, 'foret'],
    [20, 37, 'foret'],
    [20, 38, 'plaine'],
    [20, 39, 'plaine'],
    [20, 40, 'plaine'],
    [20, 41, 'plaine'],
    [20, 42, 'plaine'],
    [20, 43, 'plaine'],
    [20, 44, 'plaine'],
    [20, 45, 'foret'],
    [20, 46, 'foret'],
    [20, 47, 'foret'],

    // ROW: 21
    [21, 37, 'foret'],
    [21, 38, 'plaine'],
    [21, 39, 'plaine'],
    [21, 40, 'plaine'],
    [21, 41, 'plaine'],
    [21, 42, 'plaine'],
    [21, 43, 'plaine'],
    [21, 44, 'foret'],
    [21, 45, 'foret'],
    [21, 46, 'foret'],
    [21, 47, 'foret'],
]

export default tiles
