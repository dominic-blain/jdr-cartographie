<script>
    import tiles from '../data'
    import { fly } from 'svelte/transition'

    let openSide = false
    let activeTileIndex = null
    $: activeTile = tiles[activeTileIndex]

    function handleTileClick (index) {
        openSide = true
        activeTileIndex = index
    }

    function handleCloseClick () {
        openSide = false
        activeTileIndex = null
    }
</script>

<div class="map">
    <svg viewBox="0 0 101 101">
        {#each tiles as tile, index}
        <g>
            <title>{ `(${tile[0]}, ${tile[1]}) - ${tile[2]}` }</title>
            <rect 
                class={`tile tile-${tile[2]} ${index === activeTileIndex ? 'active' : ''}`}
                x={tile[1]}
                y={tile[0]}
                width="1"
                height="1"
                on:click={() => handleTileClick(index)}
            />
        </g>
        {/each}
    </svg>
</div>

{#if openSide && activeTile}
    <aside transition:fly={{y: 100}}>
        <h2>
            {activeTile[2]}
            <span>({activeTile[0]}, {activeTile[1]})</span>
        </h2>
        {#if activeTile[3]}
            <table>
            {#each Object.keys(activeTile[3]) as key}
                <tr>
                    <td>{key}</td>
                    <td>{activeTile[3][key]}</td>
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

    .tile {
        fill: grey;
        position: relative;
    }
    .tile.active {
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
    .tile:hover {
        fill: black;
    }
</style>
