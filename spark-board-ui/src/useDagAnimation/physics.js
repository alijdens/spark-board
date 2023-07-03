/**
 * Spring mass system physics engine.
 * 
 * Given a list of nodes, it will create a mass for each of them and
 * a spring for each edge connecting them.
 * To make sure the nodes end up in the right position, we add an
 * artificial node with infinite mass for each real node and connect them
 * with a 0 length spring (which will force the node to go to the defined
 * position in the end). Also, the other spring resting lengths will be
 * the distance between the nodes in the final layout.
 */

export function stepSimulation(state, dt) {
    const [pos, v, conn, dist, mass] = state;

    // damp factor (energy loss)
    const d = 1.1;

    for(var i = 0; i < pos.length / 2; i++) {
        // indices for the vector arrays
        const [ix, iy] = [i * 2, i * 2 + 1];

        if (mass[i] == Infinity) {
            // infinite masses cannot be moved, so it doesn't make sense to calculate their forces
            v[ix] = 0; v[iy] = 0;
            continue;
        }

        // calculate the force acting on the node
        // we start by adding a force that will dampen the velocity
        const F = {x: -d * v[ix], y: -d * v[iy]};

        // add the force of the springs connecting this node to the other nodes
        for(const j of conn.get(i)) {
            const [jx, jy] = [j * 2, j * 2 + 1];

            var k = 3.0;  // spring constant
            if (mass[i] == Infinity || mass[j] == Infinity) {
                k = 10.0;  // use a stronger spring for the artificial nodes
            }

            // distance between the nodes
            let dx = pos[jx] - pos[ix];
            let dy = pos[jy] - pos[iy];
            const d = Math.sqrt(dx * dx + dy * dy);

            if(d != 0) {
                // spring stretch from the natural length
                const [lx, ly] = [
                    dx * dist.get(`${i}-${j}`) / d,
                    dy * dist.get(`${i}-${j}`) / d
                ];

                // spring force on the node
                F.x += k * (dx - lx);
                F.y += k * (dy - ly);
            }
        }

        // calculate acceleration from the force and mass
        const a = {x: F.x / mass[i], y: F.y / mass[i]};

        // integrate the acceleration to get the new velocity
        v[ix] += a.x * dt;
        v[iy] += a.y * dt;
    }

    let hasUpdated = false;

    // integrate the velocity to get the new position
    for(var i = 0; i < pos.length / 2; i++) {
        const [ix, iy] = [i * 2, i * 2 + 1];

        const [dx, dy] = [v[ix] * dt, v[iy] * dt];

        pos[ix] += dx;
        pos[iy] += dy;

        if (Math.abs(dx) > 0.05 || Math.abs(dy) > 0.05) {
            hasUpdated = true;
        }
    }

    return hasUpdated;
}
