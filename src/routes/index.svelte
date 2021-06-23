<script>
    import tiles from '../data'
</script>

<div class="map">
    <svg viewBox="0 0 101 101">
        {#each tiles as tile}
        <g>
            <title>{ `(${tile[0]}, ${tile[1]}) - ${tile[2]}` }</title>
            <rect 
                class={`tile tile-${tile[2]}`}
                x={tile[1]}
                y={tile[0]}
                width="1"
                height="1"
            />
        </g>
        {/each}
    </svg>
</div>

<style>
    .map {
        padding: 10px;
        margin: 10px;
        border: 1px solid black;
        border-radius: 4px;
    }
    svg {
        background-color: beige;
    }

    .tile {
        fill: grey;
        position: relative;
    }
    .tile-plain {
        fill: rgb(123, 182, 123);
    }
    .tile-forest {
        fill: rgb(22, 66, 22);
    }
    .tile-mountain {
        fill: rgb(76, 76, 97);
    }
    .tile-shore {
        fill: rgb(160, 203, 219);
    }
    .tile-water {
        fill: rgb(66, 112, 195);
    }
    .tile-npc {
        fill: orange;
    }
    .tile-building {
        fill: rgb(122, 52, 40);
    }
</style>
