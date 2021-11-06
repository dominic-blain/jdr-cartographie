<script context="module">
    export async function load ({ fetch }) {
        const response = await fetch('data.json')
        if (response.ok) {
            const { tiles, buildings } = await response.json()
            return {
                props: {
                    tiles,
                    buildings
                }
            }
        }
        return {
            status: response.status,
            error: new Error('Could not load data')
        }
    }
</script>
<script lang="typescript">
    import { fly } from 'svelte/transition'

    type MapTileType = 'plaine' | 'foret' | 'mont' | 'rive' | 'eau'
    type MapBuilding = {
        name: string
        type: string
        y: number
        x: number
        npcs: string[]
    }
    type MapTile = {
        x: number
        y: number
        type: MapTileType
        building: MapBuilding | null
    }
    type Map = MapTile[]

    export let tiles: MapTileType[][]
    export let buildings: MapBuilding[]
    
    $: map = tiles.reduce((acc, columns, x) => {
        columns.forEach((type, y) => {
            const building = buildings.find(b => b.y === y && b.x === x) || null
            acc.push({
                x,
                y,
                type,
                building
            })
        })
        return acc
    }, [] as Map)

    let openSide = false
    let activeY: number | null = null
    let activeX: number | null = null
    $: activeTile = map.find(m => m.x === activeX && m.y === activeY) || null

    function handleTileClick (y, x) {
        openSide = true
        activeY = y
        activeX = x
    }

    function handleCloseClick () {
        openSide = false
        activeY = null
        activeX = null
    }

    function isActive(x: number, y: number): boolean {
        return x === activeX && y === activeY
    }
</script>

<div class="map">
    <svg viewBox="0 0 60 60">
        {#each map as {x, y, type, building}}
            <g
                class="tile-group"
                class:active={isActive(x, y)}
                on:click={() => handleTileClick(y, x)}
            >
                <title>
                    ({y+1}, {x+1}) - {type || 'inconnu'} 
                    {#if building}{` [${building.type}]`}{/if}
                </title>
                <rect
                    class={`tile tile-${type || 'inconnu'}`}
                    {x}
                    {y}
                    width="1"
                    height="1"
                />
                {#if building}
                    <polygon class={`building building-${building.type || 'inconnu'}`} points="{x+0.5},{y} {x+1},{y+0.5} {x+1},{y+1} {x},{y+1} {x},{y+0.5}" />
                {/if}
                <circle 
                    class="dot"
                    cx={x+0.5}
                    cy={y+0.5}
                    r="0.25"
                />
                
            </g>
        {/each}
    </svg>
</div>

{#if openSide && activeTile}
    <aside transition:fly={{y: 100}}>
        <h2>
            {#if activeTile.building}
                {activeTile.building.name}
            {:else}
                {activeTile ? activeTile.type : 'inconnu'}
            {/if}
            <div class="coords">({activeY+1}, {activeX+1})</div>
        </h2>
        <!-- Building info -->
        {#if activeTile.building}
            <table>
                <!-- Type -->
                <tr>
                    <td>type</td>
                    <td>{activeTile.building.type}</td>
                </tr>
                <!-- NPCs -->
                {#each activeTile.building.npcs as npc}
                    <tr>
                        <td>pnj</td>
                        <td>{npc}</td>
                    </tr>
                {/each}
            </table>
        {/if}
        <button on:click={handleCloseClick}>
            <svg viewBox="0 0 16 16">
                <g stroke-width="2" stroke="currentColor">
                    <line x1="0" y1="0" x2="16" y2="16" />
                    <line x1="16" y1="0" x2="0" y2="16" />
                </g>
            </svg>
        </button>
    </aside>
{/if}

<style>
    aside {
        position: fixed;
        right: 0;
        bottom: 0;
        width: 500px;
        max-width: 100%;
        background: azure;
        padding: 40px;
        box-sizing: border-box;
        box-shadow: 5px 5px 20px -10px #d26969;
    }

    table {
        border-collapse: collapse;
        width: 100%;
    }

    td {
        border-bottom: 1px solid black;
        padding: 8px 0;
    }

    td:first-of-type {
        font-weight: bold;
    }

    aside button {
        width: 16px;
        height: 16px;
        padding: 16px;
        border-radius: 100%;
        background: coral;
        color: white;
        box-sizing: content-box;
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-33.333%, -33.333%);
        transition: background-color 100ms;
    }
    aside button:hover {
        background: darkred;
    }

    h2 {
        text-transform: capitalize;
        padding-bottom: 10px;
        border-bottom: 2px solid black;
    }
    h2 .coords {
        font-weight: normal;
        font-size: 0.6em;
        padding: 0.4em 0.3em;
        background: aquamarine;
        border-radius: 4px;
        margin-left: 0.6em;
        vertical-align: middle;
        font-family: 'Courier New', Courier, monospace;
        position: relative;
        top: -1px;
        display: inline-block;
    }

    .map {
        padding: 10px;
        margin: 10px;
        border: 1px solid black;
        border-radius: 4px;
    }
    .map svg {
        background-color: antiquewhite;
    }

    .tile-group {
        position: relative;
    }
    .tile {
        cursor: pointer;
    }
    .dot {
        pointer-events: none;
        fill: black;
        opacity: 0;
        transition: 100ms ease-out;
        transition-property: opacity, fill;
    }

    .tile-group:hover .dot {
        opacity: 1;
    }
    .tile-group.active .dot {
        opacity: 1;
        fill: red;
    }
    .tile-plaine {
        fill: darkseagreen;
    }
    .tile-foret {
        fill: seagreen;
    }
    .tile-mont {
        fill: darkslategrey;
    }
    .tile-rive {
        fill: burlywood;
    }
    .tile-eau {
        fill: royalblue;
    }
    .tile-NPC {
        fill: gold;
    }
    .tile-batiment {
        fill: saddlebrown;
    }
    .tile-inconnu {
        fill: antiquewhite;
    }

    .building-batiment {
        fill: grey;
    }
    .building-reliquaire {
        fill: purple;
    }
    .building-dongeon {
        fill: crimson;
    }
    .building-quete {
        fill: gold;
    }
    .building-puit {
        fill: midnightblue;
    }
    .building-pnj {
        fill: coral;
    }
</style>
