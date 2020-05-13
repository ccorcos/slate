import { IEditor, Path, PathRef, PointRef, RangeRef } from '..'

export const DIRTY_PATHS: WeakMap<IEditor, Path[]> = new WeakMap()
export const FLUSHING: WeakMap<IEditor, boolean> = new WeakMap()
export const NORMALIZING: WeakMap<IEditor, boolean> = new WeakMap()
export const PATH_REFS: WeakMap<IEditor, Set<PathRef>> = new WeakMap()
export const POINT_REFS: WeakMap<IEditor, Set<PointRef>> = new WeakMap()
export const RANGE_REFS: WeakMap<IEditor, Set<RangeRef>> = new WeakMap()
