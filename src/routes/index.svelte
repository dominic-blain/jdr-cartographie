<script context="module">
    export async function load ({ fetch }) {
        const res = await fetch('data.json')
        if (res.ok) {
            return {
                props: {
                    rows: await res.json()
                }
            }
        }
        return {
            status: res.status,
            error: new Error('Could not load data')
        }
    }
</script>
<script lang="typescript">
    import { fly } from 'svelte/transition'

    export let rows: Array<Array<string>> 
    let openSide = false
    let activeY = null
    let activeX = null
    $: activeTile = activeY && activeX ? rows[activeX][activeY] : null

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
</script>

<div class="map">
    <svg viewBox="0 0 55 55">
        {#each rows as columns, x}
            {#each columns as type, y}
            <g class={`tile-group ${
                y === activeY &&
                x === activeX ? 
                'active' : ''
            }`}>

                <title>{ `(${y+1}, ${x+1}) - ${type ? type : 'inconnu'}` }</title>
                <rect 
                    class={`tile tile-${type ? type : 'inconnu'}`}
                    {x}
                    {y}
                    width="1"
                    height="1"
                    on:click={() => handleTileClick(y, x)}
                />
                <circle 
                    class="dot"
                    cx={x+0.5}
                    cy={y+0.5}
                    r="0.25"
                />
            </g>
            {/each}
        {/each}
    </svg>
</div>

{#if openSide && activeTile}
    <aside transition:fly={{y: 100}}>
        <h2>
            {activeTile ? activeTile : 'inconnu'}
            <span>({activeY+1}, {activeX+1})</span>
        </h2>
        <!-- {#if activeTile}
            <table>
            {#each Object.keys(activeTile) as key}
                <tr>
                    <td>{key}</td>
                    <td>{activeTile[key]}</td>
                </tr>
            {/each}
            </table>
        {/if} -->
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
        width: 400px;
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
    h2 span {
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
        fill: rgb(76, 76, 97);
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
</style>
