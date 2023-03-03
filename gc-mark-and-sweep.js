
var x = {
    a: [1,2,3,4],
    b: 1
}
var y = x.a


x = null

const root = {}
const heap = root

root.x = {
    a: [1,2,3,4],
    b: 1
}

root.y = x.a


/*
void mark (Object p)

if (!p.marked)


    p.marked = true;
for each Object q referenced by p
mark (q);
 */


// for each root in the roots {
    mark(root)
// }




function mark(object) {
    if(object.marked) {
        return
    }

    object.marked = true
    // for each childObject in the object {
        mark(childObject)
    // }
}



function sweep() {
    // for each object in the heap {
        if(!object.marked) {
            heap.release(object)
        }
    // }
}

sweep()


/***



void sweep ()

for each Object p in the heap


if (p.marked)
    p.marked = false
else
    heap.release (p);
 **/
