---
sidebar_label: 'Weapon Visual'
---

# Weapon Visual

The weapon visual blueprint class (**BP_WeaponVisual**) allows you to define how your weapon looks when it's attached to the player.

![weapon-visual.png](..%2F..%2F..%2F..%2F..%2Fstatic%2Fimg%2Finventory%2Fweapons%2Fweapon-visual.png)

## Properties

| Property Name        | Type          | Description                                                                      |
|----------------------|---------------|----------------------------------------------------------------------------------|
| ImpactPositions      |               |                                                                                  |
| ImpactSurfaceTypes   |               |                                                                                  |
| ImpactNormals        |               |                                                                                  |
| ShellEjectSystem     | NiagaraEffect | The Niagara Particle Effect that is used when the shell ejects.                  |
| MuzzleFlashSystem    | NiagaraEffect | The Niagara Particle Effect that is used when the weapon fires.                  |
| TracerSystem         | NiagaraEffect | The Niagara Particle Effect that is used when the bullet is going to the target. |
| ShellEjectMesh       | StaticMesh    | The mesh of the shell that is ejected after firing.                              |
| SocketNameMuzzle     | Name          | The name of the socket from where the muzzle flash should spawn.                 |
| SocketNameShellEject | Name          | The name of the socket from where the shell ejects from on the weapon.           |
| FireAudio            | SoundCue      | The sound that is played when the weapon is shot.                                |
| ImpactFX             |               |                                                                                  |
| FireMontage          | Montage       | The montage that's played when the weapon is fired.                              |
| BashMontage          | Montage       | The montage that's played when the weapon is bashed (close range hit).           |
| ReloadMontage        | Montage       | The montage that's played when the weapon is reloaded.                           |
| ImpactAudio          |               |                                                                                  |