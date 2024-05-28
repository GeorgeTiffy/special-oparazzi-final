namespace SpriteKind {
    export const Film = SpriteKind.create()
    export const UI = SpriteKind.create()
    export const Bananna = SpriteKind.create()
    export const Enemy2 = SpriteKind.create()
    export const Dialogue = SpriteKind.create()
    export const Drone = SpriteKind.create()
    export const Door = SpriteKind.create()
    export const Object = SpriteKind.create()
    export const Car = SpriteKind.create()
    export const SpeedBump = SpriteKind.create()
    export const Car2 = SpriteKind.create()
    export const Enemy3 = SpriteKind.create()
    export const HidingPlace = SpriteKind.create()
    export const VisualFlourish = SpriteKind.create()
    export const Target = SpriteKind.create()
    export const Tut_0 = SpriteKind.create()
    export const Tut_1 = SpriteKind.create()
    export const Tut_2 = SpriteKind.create()
    export const Tut03 = SpriteKind.create()
    export const Cameras = SpriteKind.create()
    export const CameraPickup = SpriteKind.create()
    export const Interactable = SpriteKind.create()
    export const CrowdTurn_ = SpriteKind.create()
    export const PopcornMachine = SpriteKind.create()
    export const screen = SpriteKind.create()
    export const Attendant2 = SpriteKind.create()
    export const Turn = SpriteKind.create()
    export const Turn2 = SpriteKind.create()
    export const VentCover = SpriteKind.create()
    export const Attendant = SpriteKind.create()
    export const Projector = SpriteKind.create()
    export const Tut_4 = SpriteKind.create()
    export const bathroomentrance = SpriteKind.create()
    export const bathroomexit = SpriteKind.create()
    export const ladybathroomchecker = SpriteKind.create()
    export const vent = SpriteKind.create()
    export const displaytarget = SpriteKind.create()
    export const popcornnotifyer = SpriteKind.create()
    export const Tut05 = SpriteKind.create()
}
// interaction between patrolling enemies and players
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (otherSprite.vy != 0 || otherSprite.vx != 0) {
        music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
        info.changeLifeBy(-1)
        scene.cameraShake(4, 500)
        Checkpoint()
        Hidden = 0
        music.setVolume(255)
    }
    if (otherSprite.vy != 0) {
        otherSprite.vy = 0
        pause(2000)
        otherSprite.vy = 75
    } else if (otherSprite.vx != 0) {
        otherSprite.vx = 0
        pause(2000)
        otherSprite.vx = 75
    }
})
// Upwards Camera Shot
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    if (controller.A.isPressed()) {
        if (Film_Count > 0) {
            music.setVolume(255)
            music.play(music.createSong(assets.song`Click Sound`), music.PlaybackMode.InBackground)
            projectile = sprites.createProjectileFromSprite(assets.image`Flash Up`, Spr_Player, 0, -200)
            projectile.setFlag(SpriteFlag.GhostThroughWalls, true)
            Film_Count += -1
            pause(100)
            sprites.destroy(projectile)
        }
    }
})
function RunLevel () {
    if (Level == 1) {
        DialogueOne()
    }
    if (Level == 2) {
        LVL_11()
    }
    if (Level == 3) {
        LVL_12()
    }
    if (Level == 4) {
        PlayerZoo()
    }
}
// Interaction that allows player to pick up film
sprites.onOverlap(SpriteKind.Player, SpriteKind.CameraPickup, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    sprites.destroy(otherSprite)
    music.setVolume(111)
    music.play(music.createSong(assets.song`Refill Film`), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Drone, SpriteKind.Car2, function (sprite, otherSprite) {
    music.stopAllSounds()
    Spr_drone.vx = 0
    Spr_drone.vy = 0
    sprites.destroy(Spr_drone, effects.fire, 50)
    music.stopAllSounds()
    scene.cameraShake(4, 500)
    music.setVolume(101)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
    pause(1000)
    scene.cameraFollowSprite(Spr_Player)
    controller.moveSprite(Spr_Player)
    music.setVolume(25)
    music.play(music.createSong(assets.song`T1P-T03`), music.PlaybackMode.LoopingInBackground)
    Spr_drone = sprites.create(assets.image`Car_Down`, SpriteKind.Drone)
    tiles.placeOnTile(Spr_drone, tiles.getTileLocation(2, 2))
    DroneActive = 0
})
function E_Patrol () {
    if (Spr_Pat.vy < 0) {
        Spr_Pat.setImage(assets.image`pat_back`)
    } else if (Spr_Pat.vy > 0) {
        Spr_Pat.setImage(assets.image`pat_front`)
    } else if (Spr_Pat.vx > 0) {
        Spr_Pat.setImage(assets.image`pat_right`)
    } else if (Spr_Pat.vx < 0) {
        Spr_Pat.setImage(assets.image`pat_left`)
    }
    if (Spr_Pat2.vy < 0) {
        Spr_Pat2.setImage(assets.image`pat_back`)
    } else if (Spr_Pat2.vy > 0) {
        Spr_Pat2.setImage(assets.image`pat_front`)
    } else if (Spr_Pat2.vx > 0) {
        Spr_Pat2.setImage(assets.image`pat_right`)
    } else if (Spr_Pat2.vx < 0) {
        Spr_Pat2.setImage(assets.image`pat_left`)
    }
    if (Spr_Pat3.vy < 0) {
        Spr_Pat3.setImage(assets.image`pat_back`)
    } else if (Spr_Pat3.vy > 0) {
        Spr_Pat3.setImage(assets.image`pat_front`)
    } else if (Spr_Pat3.vx > 0) {
        Spr_Pat3.setImage(assets.image`pat_right`)
    } else if (Spr_Pat3.vx < 0) {
        Spr_Pat3.setImage(assets.image`pat_left`)
    }
    if (Spr_Pat4.vy < 0) {
        Spr_Pat4.setImage(assets.image`pat_back`)
    } else if (Spr_Pat4.vy > 0) {
        Spr_Pat4.setImage(assets.image`pat_front`)
    } else if (Spr_Pat4.vx > 0) {
        Spr_Pat4.setImage(assets.image`pat_right`)
    } else if (Spr_Pat4.vx < 0) {
        Spr_Pat4.setImage(assets.image`pat_left`)
    }
    if (Spr_Pat5.vy < 0) {
        Spr_Pat5.setImage(assets.image`pat_back`)
    } else if (Spr_Pat5.vy > 0) {
        Spr_Pat5.setImage(assets.image`pat_front`)
    } else if (Spr_Pat5.vx > 0) {
        Spr_Pat5.setImage(assets.image`pat_right`)
    } else if (Spr_Pat5.vx < 0) {
        Spr_Pat5.setImage(assets.image`pat_left`)
    }
}
function RaziDialogue () {
    game.setDialogFrame(assets.image`RatziTextbox`)
    game.setDialogCursor(assets.image`BlackTextArrow`)
    game.setDialogTextColor(15)
}
sprites.onOverlap(SpriteKind.Drone, SpriteKind.Car, function (sprite, otherSprite) {
    music.stopAllSounds()
    Spr_drone.vx = 0
    Spr_drone.vy = 0
    sprites.destroy(Spr_drone, effects.fire, 50)
    music.stopAllSounds()
    scene.cameraShake(4, 500)
    music.setVolume(101)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
    pause(1000)
    scene.cameraFollowSprite(Spr_Player)
    controller.moveSprite(Spr_Player)
    music.setVolume(25)
    music.play(music.createSong(assets.song`T1P-T03`), music.PlaybackMode.LoopingInBackground)
    Spr_drone = sprites.create(assets.image`Car_Down`, SpriteKind.Drone)
    tiles.placeOnTile(Spr_drone, tiles.getTileLocation(2, 2))
    DroneActive = 0
})
// interaction between patrolling enemies and camera flash
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Target, function (sprite, otherSprite) {
    WinScreen = sprites.create(assets.image`EndScreen_1`, SpriteKind.screen)
    WinScreen.z += 250
    spriteutils.placeAngleFrom(
    WinScreen,
    0,
    0,
    Spr_Player
    )
    controller.moveSprite(Spr_Player, 0, 0)
    pause(4000)
    game.setGameOverMessage(true, "NICE SHOOTING RATZI!")
    game.gameOver(true)
})
function SleepyAttendant () {
    Asleep = 0
    animation.stopAnimation(animation.AnimationTypes.All, Attendant)
    animation.runImageAnimation(
    Attendant,
    assets.animation`Awake`,
    200,
    false
    )
    Attendant.setImage(assets.image`Attendant`)
    timer.after(5000, function () {
        Asleep = 1
        animation.runImageAnimation(
        Attendant,
        assets.animation`AttendantSleep`,
        200,
        true
        )
        timer.after(8000, function () {
            SleepyAttendant()
        })
    })
}
sprites.onOverlap(SpriteKind.Drone, SpriteKind.Projector, function (sprite, otherSprite) {
    music.stopAllSounds()
    Spr_drone.vx = 0
    Spr_drone.vy = 0
    sprites.destroy(Spr_drone, effects.fire, 50)
    music.stopAllSounds()
    scene.cameraShake(4, 500)
    music.setVolume(101)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
    pause(1000)
    scene.cameraFollowSprite(Projector)
    tiles.placeOnTile(Spr_drone, tiles.getTileLocation(2, 2))
    music.setVolume(25)
    music.play(music.createSong(assets.song`T1P-T03`), music.PlaybackMode.LoopingInBackground)
    Spr_drone = sprites.create(assets.image`Car_Down`, SpriteKind.Drone)
    DroneActive = 0
    sprites.destroy(Projector, effects.fire, 1000)
    pause(2000)
    scene.cameraFollowSprite(Attendant4)
    game.showLongText("Damnit! Why did the movie stop playing!", DialogLayout.Bottom)
    game.showLongText("Now we've gotta do our jobs...", DialogLayout.Bottom)
    Attendant3.vy = -50
    Attendant4.vy = -50
    timer.after(1000, function () {
        scene.cameraFollowSprite(Spr_Player)
        controller.moveSprite(Spr_Player)
        sprites.destroy(Attendant4)
        sprites.destroy(Attendant3)
    })
})
sprites.onOverlap(SpriteKind.Drone, SpriteKind.Enemy2, function (sprite, otherSprite) {
    music.stopAllSounds()
    Spr_drone.vx = 0
    Spr_drone.vy = 0
    sprites.destroy(Spr_drone, effects.fire, 50)
    music.stopAllSounds()
    scene.cameraShake(4, 500)
    music.setVolume(101)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
    pause(1000)
    scene.cameraFollowSprite(Spr_Player)
    controller.moveSprite(Spr_Player)
    music.setVolume(25)
    music.play(music.createSong(assets.song`T1P-T03`), music.PlaybackMode.LoopingInBackground)
    Spr_drone = sprites.create(assets.image`Car_Down`, SpriteKind.Drone)
    tiles.placeOnTile(Spr_drone, tiles.getTileLocation(2, 2))
    DroneActive = 0
})
function Cars_2 () {
    if (CheckPoint == 1) {
        if (CarScore2 == 1) {
            tiles.placeOnTile(Meancar4, tiles.getTileLocation(22, 47))
            Meancar4.vy = 75
        } else if (CarScore2 == 2) {
            tiles.placeOnTile(Meancar4, tiles.getTileLocation(1, 1))
            tiles.placeOnTile(MeanCar5, tiles.getTileLocation(22, 47))
            MeanCar5.vy = 125
        } else if (CarScore2 == 3) {
            tiles.placeOnTile(MeanCar5, tiles.getTileLocation(1, 1))
            timer.after(2000, function () {
                tiles.placeOnTile(MeanCar6, tiles.getTileLocation(22, 47))
                MeanCar6.vy = 300
            })
        } else if (CarScore2 == 4) {
            tiles.placeOnTile(MeanCar6, tiles.getTileLocation(1, 1))
            CarScore2 = 1
            Cars_2()
        }
    } else {
        sprites.destroy(Meancar4)
        sprites.destroy(MeanCar5)
        sprites.destroy(MeanCar6)
    }
}
sprites.onOverlap(SpriteKind.Attendant, SpriteKind.Turn, function (sprite, otherSprite) {
    Attendant2.vy = 0
    Attendant2.vx = 100
    timer.after(1000, function () {
        scene.cameraFollowSprite(Spr_Player)
    })
})
function HungryAttendant () {
    if (spriteutils.distanceBetween(Spr_Player, Attendant2) < 40 && Hungry == 1) {
        game.showLongText("So Hungry...", DialogLayout.Bottom)
        game.showLongText("Oh hey! Movies already started sorry!", DialogLayout.Bottom)
        Checkpoint()
    }
}
sprites.onOverlap(SpriteKind.Attendant2, SpriteKind.Player, function (sprite, otherSprite) {
    IDFK = 0
    sprites.destroy(VentCovering)
    game.showLongText("Hey, get out of here!", DialogLayout.Bottom)
    tiles.placeOnTile(Spr_Player, tiles.getTileLocation(42, 19))
    IDFK = 1
    if (IDFK == 1) {
        game.showLongText("Seems like there's an open vent to your right. ", DialogLayout.Center)
        game.showLongText("Maybe you can use your RC Car to cause a bit of commotion?", DialogLayout.Center)
    }
})
sprites.onOverlap(SpriteKind.Drone, SpriteKind.VentCover, function (sprite, otherSprite) {
    music.stopAllSounds()
    Spr_drone.vx = 0
    Spr_drone.vy = 0
    sprites.destroy(Spr_drone, effects.fire, 50)
    music.stopAllSounds()
    scene.cameraShake(4, 500)
    music.setVolume(101)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
    pause(1000)
    scene.cameraFollowSprite(Spr_Player)
    controller.moveSprite(Spr_Player)
    music.setVolume(25)
    music.play(music.createSong(assets.song`T1P-T03`), music.PlaybackMode.LoopingInBackground)
    Spr_drone = sprites.create(assets.image`Car_Down`, SpriteKind.Drone)
    tiles.placeOnTile(Spr_drone, tiles.getTileLocation(2, 2))
    DroneActive = 0
})
function E_Sunglasses () {
    if (Spr_Glas1.vy < 0) {
        Spr_Glas1.setImage(assets.image`glas_back`)
    } else if (Spr_Glas1.vy > 0) {
        Spr_Glas1.setImage(assets.image`glas_front`)
    } else if (Spr_Glas1.vx > 0) {
        Spr_Glas1.setImage(assets.image`glas_right`)
    } else if (Spr_Glas1.vx < 0) {
        Spr_Glas1.setImage(assets.image`glas_left`)
    }
    if (Spr_Glas2.vy < 0) {
        Spr_Glas2.setImage(assets.image`glas_back`)
    } else if (Spr_Glas2.vy > 0) {
        Spr_Glas2.setImage(assets.image`glas_front`)
    } else if (Spr_Glas2.vx > 0) {
        Spr_Glas2.setImage(assets.image`glas_right`)
    } else if (Spr_Glas2.vx < 0) {
        Spr_Glas2.setImage(assets.image`glas_left`)
    }
}
// Left camera shot
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (controller.A.isPressed()) {
        if (Film_Count > 0) {
            music.setVolume(255)
            music.play(music.createSong(assets.song`Click Sound`), music.PlaybackMode.InBackground)
            projectile = sprites.createProjectileFromSprite(assets.image`Flash Left`, Spr_Player, -200, 0)
            projectile.setFlag(SpriteFlag.GhostThroughWalls, true)
            Film_Count += -1
            pause(100)
            sprites.destroy(projectile)
        }
    }
})
info.onLifeZero(function () {
    music.stopAllSounds()
    game.setGameOverEffect(false, effects.melt)
    game.setGameOverMessage(false, "YOU FAILED")
    game.setGameOverPlayable(false, music.melodyPlayable(music.bigCrash), false)
    game.gameOver(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(Spr_Player, 0, 0)
})
sprites.onOverlap(SpriteKind.Car2, SpriteKind.SpeedBump, function (sprite, otherSprite) {
    CarScore2 += 1
    Cars_2()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Tut_4, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    game.setDialogTextColor(9)
    game.setDialogFrame(img`
        f 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
        9 9 f f f f f f f f f f f 9 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 9 f f f f f f f f f f f 9 9 
        f 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
        `)
    game.showLongText("Ok, you're mostly on your own from here on out...", DialogLayout.Center)
    game.showLongText("There's a couple other things you'll need to know. ", DialogLayout.Center)
    game.showLongText("Pressing B will send out a drone to scout ahead.", DialogLayout.Center)
    game.showLongText("Utilize this mechanic as much as you want.", DialogLayout.Center)
    game.showLongText("You won't be able to flash some enemies, guards with sunglasses can't be stunned. ", DialogLayout.Center)
    game.showLongText("You can also hide in crowds to travel undetected. ", DialogLayout.Center)
    CheckPoint = 4
})
function Cars_1 () {
    if (CheckPoint == 1) {
        if (CarScore == 1) {
            tiles.placeOnTile(MeanCar, tiles.getTileLocation(19, 47))
            MeanCar.vy = 100
        } else if (CarScore == 2) {
            tiles.placeOnTile(MeanCar, tiles.getTileLocation(1, 1))
            timer.after(2000, function () {
                tiles.placeOnTile(MeanCar2, tiles.getTileLocation(19, 47))
                MeanCar2.vy = 250
            })
        } else if (CarScore == 3) {
            tiles.placeOnTile(MeanCar2, tiles.getTileLocation(1, 1))
            tiles.placeOnTile(MeanCar3, tiles.getTileLocation(19, 47))
            MeanCar3.vy = 150
        } else if (CarScore == 4) {
            tiles.placeOnTile(MeanCar3, tiles.getTileLocation(1, 1))
            CarScore = 1
            Cars_1()
        }
    } else if (CheckPoint == 2) {
        sprites.destroy(MeanCar)
        sprites.destroy(MeanCar2)
        sprites.destroy(MeanCar3)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Tut_2, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    game.setDialogTextColor(9)
    game.setDialogFrame(img`
        f 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
        9 9 f f f f f f f f f f f 9 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 9 f f f f f f f f f f f 9 9 
        f 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
        `)
    game.showLongText("These enemies are bodyguards, using your camera you should be able to stun them.", DialogLayout.Center)
    game.showLongText("To flash your camera HOLD A and WHILE HOLDING A point in the direction you want to shoot it in. ", DialogLayout.Center)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Tut05, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    game.showLongText("Sometimes Objects nearby will change when you get close to them.", DialogLayout.Center)
    game.showLongText("Press A when this happens to interact with them!", DialogLayout.Center)
    InteractableTut = 0
    TrashDialogue1 = 1
})
sprites.onOverlap(SpriteKind.HidingPlace, SpriteKind.CrowdTurn_, function (sprite, otherSprite) {
    MovingCrowd.vx = 0
    MovingCrowd.vy = -40
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bathroomentrance, function (sprite, otherSprite) {
    tiles.placeOnTile(Spr_Player, tiles.getTileLocation(5, 11))
})
// interaction between patrolling enemies and players
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy2, function (sprite, otherSprite) {
    music.setVolume(255)
    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
    Checkpoint()
    Hidden = 0
    if (otherSprite.vy != 0) {
        otherSprite.vy = 0
        pause(2000)
        otherSprite.vy = 75
    } else if (otherSprite.vx != 0) {
        otherSprite.vx = 0
        pause(2000)
        otherSprite.vx = 75
    }
})
// Interaction that allows player to pick up film
sprites.onOverlap(SpriteKind.Player, SpriteKind.Film, function (sprite, otherSprite) {
    Film_Count += 1
    sprites.destroy(otherSprite)
    music.setVolume(111)
    music.play(music.createSong(assets.song`Refill Film`), music.PlaybackMode.UntilDone)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Hidden == 0) {
        if (DroneActive == 1) {
            animation.stopAnimation(animation.AnimationTypes.All, Spr_Player)
            Spr_Player.setImage(assets.image`RatzDrone_Down`)
        } else {
            animation.stopAnimation(animation.AnimationTypes.All, Spr_Player)
        }
        animation.runImageAnimation(
        Spr_Player,
        assets.animation`RatziWalk_Down0`,
        100,
        true
        )
    }
})
// right camera shot
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (controller.A.isPressed()) {
        if (Film_Count > 0) {
            music.setVolume(255)
            music.play(music.createSong(assets.song`Click Sound`), music.PlaybackMode.InBackground)
            projectile = sprites.createProjectileFromSprite(assets.image`Flash Right`, Spr_Player, 200, 0)
            projectile.setFlag(SpriteFlag.GhostThroughWalls, true)
            Film_Count += -1
            pause(100)
            sprites.destroy(projectile)
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (DroneActive == 0) {
        DroneActive = 1
        controller.moveSprite(Spr_Player, 0, 0)
        spriteutils.placeAngleFrom(
        Spr_drone,
        0,
        1,
        Spr_Player
        )
        scene.cameraFollowSprite(Spr_drone)
        music.stopAllSounds()
    }
})
sprites.onOverlap(SpriteKind.HidingPlace, SpriteKind.Door, function (sprite, otherSprite) {
    MovingCrowd.vx = 0
    MovingCrowd.vy = 0
    timer.after(500, function () {
        Hidden = 0
        tiles.placeOnTile(MovingCrowd, tiles.getTileLocation(80, 33))
        animation.runImageAnimation(
        Door1,
        assets.animation`myAnim0`,
        700,
        false
        )
        SpawnCrowd()
    })
    if (Hidden == 1) {
        Level = 3
        sprites.destroy(Spr_Player)
        BackDoor = 1
        RunLevel()
    }
})
// interaction between patrolling enemies and players
sprites.onOverlap(SpriteKind.Player, SpriteKind.Car2, function (sprite, otherSprite) {
    if (otherSprite.vy != 0) {
        music.setVolume(255)
        music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
        info.changeLifeBy(-1)
        scene.cameraShake(4, 500)
        Checkpoint()
    }
})
// resets movement once picture is taken
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(Spr_Player, 100, 100)
})
function GlassesChase () {
    if (Hidden == 0) {
        if (spriteutils.distanceBetween(Spr_Glas1, Spr_Player) < 75) {
            Spr_Glas1.follow(Spr_Player, 75)
        } else if (spriteutils.distanceBetween(Spr_Glas1, Spr_Player) > 120) {
            Spr_Glas1.follow(Spr_Player, 0)
            tiles.placeOnTile(Spr_Glas1, tiles.getTileLocation(58, 28))
        }
    } else if (Hidden == 1) {
        Spr_Glas1.follow(Spr_Player, 0)
    }
    if (Hidden == 0) {
        if (spriteutils.distanceBetween(Spr_Glas2, Spr_Player) < 75) {
            Spr_Glas2.follow(Spr_Player, 75)
        } else if (spriteutils.distanceBetween(Spr_Glas2, Spr_Player) > 120) {
            Spr_Glas2.follow(Spr_Player, 0)
            tiles.placeOnTile(Spr_Glas2, tiles.getTileLocation(61, 28))
        }
    } else if (Hidden == 1) {
        Spr_Glas2.follow(Spr_Player, 0)
    }
}
function LVL_11 () {
    CheckPoint = 1
    music.stopAllSounds()
    pause(2000)
    scene.setBackgroundImage(assets.image`Background`)
    tiles.setCurrentTilemap(tilemap`Lvl1_Rm1`)
    TrashDialogue1 = 1
    Film_Count = 5
    Item_Name = 0
    Hidden = 0
    info.setScore(0)
    info.setLife(3)
    spriteutils.setLifeImage(assets.image`Little Goobs`)
    Spr_CameraPU = sprites.create(assets.image`CamLife`, SpriteKind.CameraPickup)
    tiles.placeOnTile(Spr_CameraPU, tiles.getTileLocation(50, 2))
    Spr_Film = sprites.create(assets.image`Film`, SpriteKind.Film)
    tiles.placeOnTile(Spr_Film, tiles.getTileLocation(75, 19))
    lamp4 = sprites.create(assets.image`streetlamp`, SpriteKind.Object)
    tiles.placeOnTile(lamp4, tiles.getTileLocation(12, 49))
    lamp2 = sprites.create(assets.image`streetlamp`, SpriteKind.Object)
    tiles.placeOnTile(lamp2, tiles.getTileLocation(25, 49))
    lamp3 = sprites.create(assets.image`streetlamp`, SpriteKind.Object)
    tiles.placeOnTile(lamp3, tiles.getTileLocation(28, 31))
    lamp4 = sprites.create(assets.image`streetlamp`, SpriteKind.Object)
    tiles.placeOnTile(lamp4, tiles.getTileLocation(36, 31))
    MeanCar = sprites.create(assets.image`CarDown_G`, SpriteKind.Car)
    tiles.placeOnTile(MeanCar, tiles.getTileLocation(1, 1))
    MeanCar2 = sprites.create(assets.image`CarDown_DANGER2`, SpriteKind.Car)
    tiles.placeOnTile(MeanCar2, tiles.getTileLocation(1, 1))
    MeanCar3 = sprites.create(assets.image`CarDown_R`, SpriteKind.Car)
    tiles.placeOnTile(MeanCar3, tiles.getTileLocation(1, 1))
    Meancar4 = sprites.create(assets.image`CarDown_G`, SpriteKind.Car2)
    tiles.placeOnTile(Meancar4, tiles.getTileLocation(1, 1))
    MeanCar5 = sprites.create(assets.image`CarDown_R`, SpriteKind.Car2)
    tiles.placeOnTile(MeanCar5, tiles.getTileLocation(1, 1))
    MeanCar6 = sprites.create(assets.image`CarDown_DANGER2`, SpriteKind.Car2)
    tiles.placeOnTile(MeanCar6, tiles.getTileLocation(1, 1))
    Spr_Pat = sprites.create(assets.image`pat_front`, SpriteKind.Enemy)
    tiles.placeOnTile(Spr_Pat, tiles.getTileLocation(37, 53))
    Spr_Pat.vy = 75
    Spr_Pat.setBounceOnWall(true)
    Spr_Pat5 = sprites.create(assets.image`pat_front`, SpriteKind.Enemy)
    tiles.placeOnTile(Spr_Pat5, tiles.getTileLocation(38, 30))
    Spr_Pat5.vy = 75
    Spr_Pat5.setBounceOnWall(true)
    Spr_Pat4 = sprites.create(assets.image`pat_front`, SpriteKind.Enemy)
    tiles.placeOnTile(Spr_Pat4, tiles.getTileLocation(33, 30))
    Spr_Pat4.vx = 75
    Spr_Pat4.setBounceOnWall(true)
    Spr_Pat3 = sprites.create(assets.image`pat_front`, SpriteKind.Enemy)
    tiles.placeOnTile(Spr_Pat3, tiles.getTileLocation(27, 30))
    Spr_Pat3.vx = 75
    Spr_Pat3.setBounceOnWall(true)
    Spr_Pat2 = sprites.create(assets.image`pat_front`, SpriteKind.Enemy)
    tiles.placeOnTile(Spr_Pat2, tiles.getTileLocation(35, 53))
    Spr_Pat2.vy = -75
    Spr_Pat2.setBounceOnWall(true)
    Spr_Glas = sprites.create(assets.image`glas_left`, SpriteKind.Enemy2)
    tiles.placeOnTile(Spr_Glas, tiles.getTileLocation(50, 34))
    Spr_Glas1 = sprites.create(assets.image`glas_front`, SpriteKind.Enemy2)
    tiles.placeOnTile(Spr_Glas1, tiles.getTileLocation(58, 28))
    Spr_Glas2 = sprites.create(assets.image`glas_front`, SpriteKind.Enemy2)
    tiles.placeOnTile(Spr_Glas2, tiles.getTileLocation(61, 28))
    MovingCrowd = sprites.create(assets.image`Crowd_Left`, SpriteKind.HidingPlace)
    MovingCrowd.setFlag(SpriteFlag.GhostThroughWalls, true)
    tiles.placeOnTile(MovingCrowd, tiles.getTileLocation(72, 33))
    SpawnCrowd()
    CrowdTurn = sprites.create(assets.image`Turn`, SpriteKind.CrowdTurn_)
    CrowdTurn.setFlag(SpriteFlag.Invisible, true)
    tiles.placeOnTile(CrowdTurn, tiles.getTileLocation(57, 32))
    TicketWindow = sprites.create(assets.image`myImage2`, SpriteKind.VisualFlourish)
    tiles.placeOnTile(TicketWindow, tiles.getTileLocation(52, 23))
    TheaterSign = sprites.create(assets.image`myImage3`, SpriteKind.VisualFlourish)
    tiles.placeOnTile(TheaterSign, tiles.getTileLocation(35, 19))
    TheaterSign2 = sprites.create(assets.image`myImage3`, SpriteKind.VisualFlourish)
    tiles.placeOnTile(TheaterSign2, tiles.getTileLocation(66, 19))
    Door1 = sprites.create(assets.image`Theater Door`, SpriteKind.Door)
    tiles.placeOnTile(Door1, tiles.getTileLocation(59, 24))
    StationaryCar = sprites.create(assets.image`CarRight_O`, SpriteKind.Object)
    tiles.placeOnTile(StationaryCar, tiles.getTileLocation(28, 49))
    StationaryCar = sprites.create(assets.image`CarDown_Crash`, SpriteKind.Object)
    tiles.placeOnTile(StationaryCar, tiles.getTileLocation(31, 50))
    StationaryCar = sprites.create(assets.image`CarDown_Br`, SpriteKind.Object)
    tiles.placeOnTile(StationaryCar, tiles.getTileLocation(35, 36))
    StationaryCar = sprites.create(assets.image`CarDown_R`, SpriteKind.Object)
    tiles.placeOnTile(StationaryCar, tiles.getTileLocation(39, 36))
    StationaryCar = sprites.create(assets.image`CarUp_L`, SpriteKind.Object)
    tiles.placeOnTile(StationaryCar, tiles.getTileLocation(41, 36))
    StationaryCar = sprites.create(assets.image`CarDown_G`, SpriteKind.Object)
    tiles.placeOnTile(StationaryCar, tiles.getTileLocation(33, 30))
    StationaryCar = sprites.create(assets.image`CarDown_R`, SpriteKind.Object)
    tiles.placeOnTile(StationaryCar, tiles.getTileLocation(31, 30))
    StationaryCar = sprites.create(assets.image`CarDown_B`, SpriteKind.Object)
    tiles.placeOnTile(StationaryCar, tiles.getTileLocation(28, 56))
    StationaryCar = sprites.create(assets.image`CarLeft_P`, SpriteKind.Object)
    tiles.placeOnTile(StationaryCar, tiles.getTileLocation(31, 56))
    SpeedBump2 = sprites.create(assets.image`myImage0`, SpriteKind.SpeedBump)
    tiles.placeOnTile(SpeedBump2, tiles.getTileLocation(21, 62))
    FlashCams = sprites.create(assets.image`Cameras Still`, SpriteKind.Cameras)
    tiles.placeOnTile(FlashCams, tiles.getTileLocation(27, 15))
    animation.runImageAnimation(
    FlashCams,
    assets.animation`Cameras`,
    1500,
    true
    )
    Spr_Player = sprites.create(assets.image`pap_front`, SpriteKind.Player)
    scene.cameraFollowSprite(Spr_Player)
    Spr_Player.z += 100
    controller.moveSprite(Spr_Player, 100, 100)
    Checkpoint()
    FilmUi = sprites.create(assets.image`Film_5`, SpriteKind.UI)
    FilmUi.setFlag(SpriteFlag.RelativeToCamera, true)
    FilmUi.setPosition(14, 107)
    FilmUi.z += 100
    Tutorial_0 = sprites.create(assets.image`Dialogue`, SpriteKind.Tut_0)
    tiles.placeOnTile(Tutorial_0, tiles.getTileLocation(15, 53))
    Tutorial_0.setFlag(SpriteFlag.Invisible, true)
    Tutorial_1 = sprites.create(assets.image`Dialogue`, SpriteKind.Tut_1)
    tiles.placeOnTile(Tutorial_1, tiles.getTileLocation(17, 53))
    Tutorial_1.setFlag(SpriteFlag.Invisible, true)
    Tutorial_2 = sprites.create(assets.image`Dialogue`, SpriteKind.Tut_2)
    tiles.placeOnTile(Tutorial_2, tiles.getTileLocation(33, 53))
    Tutorial_2.setFlag(SpriteFlag.Invisible, true)
    Tutorial_3 = sprites.create(assets.image`Dialogue`, SpriteKind.Tut03)
    tiles.placeOnTile(Tutorial_3, tiles.getTileLocation(42, 53))
    Tutorial_3.setFlag(SpriteFlag.Invisible, true)
    Interactable = sprites.create(assets.image`Interactable_1`, SpriteKind.Interactable)
    tiles.placeOnTile(Interactable, tiles.getTileLocation(49, 47))
    dawg = sprites.create(assets.image`myImage24`, SpriteKind.Interactable)
    tiles.placeOnTile(dawg, tiles.getTileLocation(74, 29))
    Tutorial_4 = sprites.create(assets.image`Dialogue0`, SpriteKind.Tut_4)
    Tutorial_4.setFlag(SpriteFlag.Invisible, true)
    tiles.placeOnTile(Tutorial_4, tiles.getTileLocation(47, 40))
    Tutorial5 = sprites.create(assets.image`Dialogue0`, SpriteKind.Tut05)
    tiles.placeOnTile(Tutorial5, tiles.getTileLocation(48, 50))
    Tutorial5.setFlag(SpriteFlag.Invisible, true)
    music.setVolume(25)
    music.play(music.createSong(assets.song`T1P-T03`), music.PlaybackMode.LoopingInBackground)
}
function Doggy () {
    if (spriteutils.distanceBetween(Spr_Player, dawg) < 42) {
        InteractableActive = 1
        dawg.setImage(assets.image`myImage25`)
    } else if (spriteutils.distanceBetween(Spr_Player, dawg) > 42) {
        InteractableActive = 0
        dawg.setImage(assets.image`myImage24`)
    }
    if (controller.A.isPressed() && spriteutils.distanceBetween(Spr_Player, dawg) < 30) {
        sprites.destroy(dawg)
        doggie = sprites.create(img`
            ....ff....ff............
            ...f22f..f22f...........
            ..f2a2f..f222f..........
            ..ffa2affa2a2f..........
            ....f222222aff..........
            ....fa22222af...........
            ...faf22fa22f...........
            ...ff2222f2ff...........
            ..ffff2222af............
            ..fafa2222f3f...........
            ..fffff2af3faf..........
            ...fbafafefa2af.........
            ...fbfffffa222f.........
            ....ffaaa222222f........
            ....faaa2222222f.ff.....
            ....faa2a2222222ff2f....
            ....fa2a22222222f22f....
            ....fafaa2afa222a2af....
            ....fafff2ffaa22a2f.....
            ....f2f.f2fa2222af......
            ...ff2ffa2fa2222f.......
            ...f22ff22fa222af.......
            ....fff22f22222f........
            .......ffffffff.........
            `, SpriteKind.Object)
        tiles.placeOnTile(doggie, tiles.getTileLocation(74, 29))
        animation.runImageAnimation(
        doggie,
        assets.animation`myAnim1`,
        250,
        true
        )
        music.play(music.createSong(hex`0078000408020601001c000f05001202c102c201000405002800000064002800031400060200040c0000000400010504000800010502001c000c960064006d019001000478002c010000640032000000000a0600050c0000000400010504000800010505001c000f0a006400f4010a00000400000000000000000000000000000000020c0000000400010504000800010506001c00010a006400f4016400000400000000000000000000000000000000020c0000000400010504000800010508001c000e050046006603320000040a002d00000064001400013200020100020c0000000400010504000800010509010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8000c0000000100010c04000500010c`), music.PlaybackMode.UntilDone)
    }
}
function TrashCan () {
    if (spriteutils.distanceBetween(Spr_Player, Interactable) < 40) {
        InteractableActive = 1
        Interactable.setImage(assets.image`Interactable_Alive`)
    } else if (spriteutils.distanceBetween(Spr_Player, Interactable) > 40) {
        InteractableActive = 0
        Interactable.setImage(assets.image`Interactable_1`)
    }
    if (Film_Count == 6) {
        if (controller.A.isPressed() && spriteutils.distanceBetween(Spr_Player, Interactable) < 35) {
            game.showLongText("Haha, thanks for the film!", DialogLayout.Bottom)
            game.showLongText("Now I can use some of these cameras I've got!", DialogLayout.Bottom)
            game.showLongText("I'll let you hold onto one of them for the trouble.", DialogLayout.Bottom)
            game.showLongText("Here's your camera", DialogLayout.Bottom)
            info.changeLifeBy(1)
            Film_Count = 1
            tiles.placeOnTile(Spr_Player, tiles.getTileLocation(48, 49))
        }
    } else if (Film_Count != 6) {
        if (spriteutils.distanceBetween(Spr_Player, Interactable) < 40 && TrashDialogue1 == 1) {
            game.showLongText("Hey Kid! Over here in the trashcan!", DialogLayout.Bottom)
            game.showLongText("I've got a deal for you, I've got all these cameras but no film!", DialogLayout.Bottom)
            game.showLongText("If you come back to me with 6 film then I can give you one of my cameras!", DialogLayout.Bottom)
            TrashDialogue1 = 2
            tiles.placeOnTile(Spr_Player, tiles.getTileLocation(48, 49))
        } else if (controller.A.isPressed() && spriteutils.distanceBetween(Spr_Player, Interactable) < 35) {
            game.showLongText("Come back when you've got that film for me!", DialogLayout.Bottom)
            tiles.placeOnTile(Spr_Player, tiles.getTileLocation(48, 49))
        }
    }
}
function DialogueOne () {
    music.play(music.createSong(assets.song`Tip Toe Intro`), music.PlaybackMode.LoopingInBackground)
    tiles.setCurrentTilemap(tilemap`Dialogue`)
    scene.setBackgroundImage(assets.image`Back2`)
    Menu = sprites.create(assets.image`StartScreen`, SpriteKind.screen)
    tiles.placeOnTile(Menu, tiles.getTileLocation(9, 9))
    scene.cameraFollowSprite(Menu)
    Menu.z = 50
    Spr_Play_Dialogue = sprites.create(assets.image`pap Dialogue`, SpriteKind.Dialogue)
    tiles.placeOnTile(Spr_Play_Dialogue, tiles.getTileLocation(6, 9))
    Spr_Boss = sprites.create(assets.image`Boss`, SpriteKind.Dialogue)
    tiles.placeOnTile(Spr_Boss, tiles.getTileLocation(12, 9))
    Spr_Camera = sprites.create(assets.image`Camera`, SpriteKind.Dialogue)
    tiles.placeOnTile(Spr_Camera, tiles.getTileLocation(9, 9))
    pauseUntil(() => controller.A.isPressed())
    sprites.destroy(Menu)
    scene.cameraFollowSprite(Spr_Camera)
    BawsmanDialogue()
    game.showLongText("Ratzi I've got a job for you!", DialogLayout.Bottom)
    RaziDialogue()
    game.showLongText("Mr.Bawsman had walked up to my desk to talk", DialogLayout.Bottom)
    game.showLongText("I knew this could only mean one thing...", DialogLayout.Bottom)
    game.showLongText("he had a job for me...", DialogLayout.Bottom)
    BawsmanDialogue()
    game.showLongText("...", DialogLayout.Bottom)
    game.showLongText("Right...", DialogLayout.Bottom)
    game.showLongText("As you probably already know ", DialogLayout.Bottom)
    game.showLongText("Hot shot Cyril just starred in that new sci-fi movie", DialogLayout.Bottom)
    pause(200)
    celebtarget = sprites.create(assets.image`TargetSitting_1`, SpriteKind.displaytarget)
    tiles.placeOnTile(celebtarget, tiles.getTileLocation(9, 7))
    pause(2000)
    sprites.destroy(celebtarget)
    game.showLongText("He's been caught on the phone during his own premiere once already", DialogLayout.Bottom)
    game.showLongText("So this is prime photo opportunity!", DialogLayout.Bottom)
    RaziDialogue()
    game.showLongText("Bawsman was counting on me to do the job right, I knew I'd have to accept...", DialogLayout.Bottom)
    game.showLongText("...", DialogLayout.Bottom)
    music.stopAllSounds()
    game.showLongText("I accept", DialogLayout.Bottom)
    Level += 1
    sprites.destroy(Spr_Play_Dialogue)
    sprites.destroy(Spr_Boss)
    sprites.destroy(Spr_Camera)
}
sprites.onOverlap(SpriteKind.Car, SpriteKind.SpeedBump, function (sprite, otherSprite) {
    CarScore += 1
    Cars_1()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Hidden == 0) {
        if (DroneActive == 1) {
            animation.stopAnimation(animation.AnimationTypes.All, Spr_Player)
            Spr_Player.setImage(assets.image`RatzDrone_Left`)
        } else {
            animation.stopAnimation(animation.AnimationTypes.All, Spr_Player)
            animation.runImageAnimation(
            Spr_Player,
            assets.animation`RatziWalk_Left`,
            100,
            true
            )
        }
    }
})
// interaction between patrolling enemies and players
sprites.onOverlap(SpriteKind.Player, SpriteKind.Car, function (sprite, otherSprite) {
    if (otherSprite.vy != 0) {
        music.setVolume(255)
        music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
        info.changeLifeBy(-1)
        scene.cameraShake(4, 500)
        Checkpoint()
    }
})
function P_Drone () {
    if (DroneActive == 1) {
        if (controller.left.isPressed()) {
            Spr_drone.setImage(assets.image`Car_Left`)
            music.stopAllSounds()
            Spr_drone.vx = -150
            Spr_drone.vy = 0
            music.setVolume(101)
            music.play(music.createSoundEffect(WaveShape.Noise, 2010, 2010, 102, 102, 9999, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.LoopingInBackground)
        } else if (controller.right.isPressed()) {
            Spr_drone.setImage(assets.image`Car_Right`)
            music.stopAllSounds()
            Spr_drone.vx = 150
            Spr_drone.vy = 0
            music.setVolume(101)
            music.play(music.createSoundEffect(WaveShape.Noise, 2010, 2010, 102, 102, 9999, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.LoopingInBackground)
        } else if (controller.up.isPressed()) {
            Spr_drone.setImage(assets.image`Car_Up`)
            music.stopAllSounds()
            Spr_drone.vy = -150
            Spr_drone.vx = 0
            music.setVolume(101)
            music.play(music.createSoundEffect(WaveShape.Noise, 2010, 2010, 102, 102, 9999, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.LoopingInBackground)
        } else if (controller.down.isPressed()) {
            Spr_drone.setImage(assets.image`Car_Down`)
            music.stopAllSounds()
            Spr_drone.vy = 150
            Spr_drone.vx = 0
            music.setVolume(101)
            music.play(music.createSoundEffect(WaveShape.Noise, 2010, 2010, 102, 102, 9999, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.LoopingInBackground)
        }
    }
    if (Spr_drone.isHittingTile(CollisionDirection.Left)) {
        Spr_drone.vx = 0
        Spr_drone.vy = 0
        sprites.destroy(Spr_drone, effects.fire, 100)
        music.stopAllSounds()
        scene.cameraShake(4, 500)
        music.setVolume(101)
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
        pause(1000)
        scene.cameraFollowSprite(Spr_Player)
        controller.moveSprite(Spr_Player)
        music.setVolume(25)
        music.play(music.createSong(assets.song`T1P-T03`), music.PlaybackMode.LoopingInBackground)
        Spr_drone = sprites.create(assets.image`Car_Right`, SpriteKind.Drone)
        tiles.placeOnTile(Spr_drone, tiles.getTileLocation(75, 60))
        DroneActive = 0
    } else if (Spr_drone.isHittingTile(CollisionDirection.Right)) {
        Spr_drone.vx = 0
        Spr_drone.vy = 0
        sprites.destroy(Spr_drone, effects.fire, 100)
        music.stopAllSounds()
        scene.cameraShake(4, 500)
        music.setVolume(101)
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
        pause(1000)
        scene.cameraFollowSprite(Spr_Player)
        controller.moveSprite(Spr_Player)
        music.setVolume(25)
        music.play(music.createSong(assets.song`T1P-T03`), music.PlaybackMode.LoopingInBackground)
        Spr_drone = sprites.create(assets.image`Car_Right`, SpriteKind.Drone)
        tiles.placeOnTile(Spr_drone, tiles.getTileLocation(75, 60))
        DroneActive = 0
    } else if (Spr_drone.isHittingTile(CollisionDirection.Bottom)) {
        Spr_drone.vx = 0
        Spr_drone.vy = 0
        sprites.destroy(Spr_drone, effects.fire, 100)
        music.stopAllSounds()
        scene.cameraShake(4, 500)
        music.setVolume(101)
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
        pause(1000)
        scene.cameraFollowSprite(Spr_Player)
        controller.moveSprite(Spr_Player)
        music.setVolume(25)
        music.play(music.createSong(assets.song`T1P-T03`), music.PlaybackMode.LoopingInBackground)
        Spr_drone = sprites.create(assets.image`Car_Right`, SpriteKind.Drone)
        tiles.placeOnTile(Spr_drone, tiles.getTileLocation(75, 60))
        DroneActive = 0
    } else if (Spr_drone.isHittingTile(CollisionDirection.Top)) {
        Spr_drone.vx = 0
        Spr_drone.vy = 0
        sprites.destroy(Spr_drone, effects.fire, 100)
        music.stopAllSounds()
        scene.cameraShake(4, 500)
        music.setVolume(101)
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
        pause(1000)
        scene.cameraFollowSprite(Spr_Player)
        controller.moveSprite(Spr_Player)
        music.setVolume(25)
        music.play(music.createSong(assets.song`T1P-T03`), music.PlaybackMode.LoopingInBackground)
        Spr_drone = sprites.create(assets.image`Car_Right`, SpriteKind.Drone)
        tiles.placeOnTile(Spr_drone, tiles.getTileLocation(75, 60))
        DroneActive = 0
    }
}
function SpawnCrowd () {
    if (CheckPoint == 1 || CheckPoint == 4) {
        MovingCrowd.vx = -40
    } else {
        sprites.destroy(MovingCrowd)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.bathroomexit, function (sprite, otherSprite) {
    tiles.placeOnTile(Spr_Player, tiles.getTileLocation(51, 35))
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Hidden == 0) {
        if (DroneActive == 1) {
            animation.stopAnimation(animation.AnimationTypes.All, Spr_Player)
            Spr_Player.setImage(assets.image`RatzDrone_Right`)
        } else {
            animation.stopAnimation(animation.AnimationTypes.All, Spr_Player)
            animation.runImageAnimation(
            Spr_Player,
            assets.animation`RatziWalk_Right`,
            100,
            true
            )
        }
    }
})
function LVL_12 () {
    bathroomchecker = false
    CheckPoint = 2
    music.stopAllSounds()
    pause(2000)
    scene.setBackgroundImage(assets.image`Background`)
    tiles.setCurrentTilemap(tilemap`Lvl1_Rm2`)
    Hidden = 0
    spriteutils.setLifeImage(assets.image`Little Goobs`)
    sprites.destroy(Spr_Film)
    sprites.destroy(Spr_CameraPU)
    sprites.destroy(TicketWindow)
    sprites.destroy(TheaterSign2)
    sprites.destroy(TheaterSign)
    sprites.destroy(Door1)
    sprites.destroy(FlashCams)
    sprites.destroy(CrowdTurn)
    sprites.destroyAllSpritesOfKind(SpriteKind.Object)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy2)
    PopcornNotif = sprites.create(assets.image`myImage15`, SpriteKind.popcornnotifyer)
    tiles.placeOnTile(PopcornNotif, tiles.getTileLocation(60, 26))
    PopcornNotif.setFlag(SpriteFlag.Invisible, true)
    PopcornMachine = sprites.create(assets.image`myImage15`, SpriteKind.PopcornMachine)
    tiles.placeOnTile(PopcornMachine, tiles.getTileLocation(60, 26))
    Spr_Player = sprites.create(assets.image`pap_front`, SpriteKind.Player)
    scene.cameraFollowSprite(Spr_Player)
    Spr_Player.z += 100
    controller.moveSprite(Spr_Player, 100, 100)
    Target1 = sprites.create(assets.image`Target1`, SpriteKind.Target)
    Target1.setFlag(SpriteFlag.Invisible, true)
    tiles.placeOnTile(Target1, tiles.getTileLocation(36, 39))
    bathroomexit = sprites.create(assets.image`myImage23`, SpriteKind.bathroomexit)
    tiles.placeOnTile(bathroomexit, tiles.getTileLocation(7, 11))
    bathroomexit.setFlag(SpriteFlag.Invisible, true)
    bathroomentrance = sprites.create(assets.image`myImage23`, SpriteKind.bathroomentrance)
    tiles.placeOnTile(bathroomentrance, tiles.getTileLocation(48, 35))
    bathroomentrance.setFlag(SpriteFlag.Invisible, true)
    ladysroomentrance = sprites.create(assets.image`myImage23`, SpriteKind.ladybathroomchecker)
    tiles.placeOnTile(ladysroomentrance, tiles.getTileLocation(72, 35))
    ladysroomentrance.setFlag(SpriteFlag.Invisible, true)
    exitdoor = sprites.create(assets.image`myImage13`, SpriteKind.Object)
    tiles.placeOnTile(exitdoor, tiles.getTileLocation(25, 15))
    Spr_Film = sprites.create(assets.image`Film`, SpriteKind.Film)
    tiles.placeOnTile(Spr_Film, tiles.getTileLocation(3, 11))
    BigCrowd = sprites.create(assets.image`BigCrowd`, SpriteKind.Object)
    tiles.placeOnTile(BigCrowd, tiles.getTileLocation(52, 32))
    Celeb1 = sprites.create(assets.image`myImage20`, SpriteKind.Object)
    tiles.placeOnTile(Celeb1, tiles.getTileLocation(64, 31))
    Celeb2 = sprites.create(assets.image`myImage19`, SpriteKind.Object)
    tiles.placeOnTile(Celeb2, tiles.getTileLocation(66, 37))
    Celeb3 = sprites.create(assets.image`myImage21`, SpriteKind.Object)
    tiles.placeOnTile(Celeb3, tiles.getTileLocation(68, 37))
    Attendant = sprites.create(assets.image`Attendant`, SpriteKind.Attendant)
    tiles.placeOnTile(Attendant, tiles.getTileLocation(64, 27))
    Asleep = 0
    Attendant2 = sprites.create(assets.image`Attendant`, SpriteKind.Attendant)
    Hungry = 1
    tiles.placeOnTile(Attendant2, tiles.getTileLocation(52, 24))
    Obj_Turn = sprites.create(assets.image`Turn2`, SpriteKind.Turn)
    Obj_Turn.setFlag(SpriteFlag.Invisible, true)
    tiles.placeOnTile(Obj_Turn, tiles.getTileLocation(52, 33))
    Obj_Turn2 = sprites.create(assets.image`Turn2`, SpriteKind.Turn2)
    Obj_Turn2.setFlag(SpriteFlag.Invisible, true)
    tiles.placeOnTile(Obj_Turn2, tiles.getTileLocation(70, 32))
    VentCovering = sprites.create(assets.image`VentCover`, SpriteKind.VentCover)
    tiles.placeOnTile(VentCovering, tiles.getTileLocation(55, 19))
    Attendant3 = sprites.create(assets.image`myImage18`, SpriteKind.Attendant2)
    tiles.placeOnTile(Attendant3, tiles.getTileLocation(32, 39))
    Attendant4 = sprites.create(assets.image`myImage18`, SpriteKind.Attendant2)
    tiles.placeOnTile(Attendant4, tiles.getTileLocation(33, 39))
    Projector = sprites.create(assets.image`Projector`, SpriteKind.Projector)
    tiles.placeOnTile(Projector, tiles.getTileLocation(27, 10))
    Checkpoint()
    timer.after(500, function () {
        game.showLongText("Looks like the movie started, you'll need to distract the attendant to get in!", DialogLayout.Center)
    })
    SleepyAttendant()
    music.setVolume(25)
    music.play(music.createSong(assets.song`T1P-T03`), music.PlaybackMode.LoopingInBackground)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Cameras, function (sprite, otherSprite) {
    music.setVolume(255)
    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
    Checkpoint()
})
function BawsmanDialogue () {
    game.setDialogFrame(assets.image`BawsmanTextbox`)
    game.setDialogCursor(assets.image`WhiteTextArrow`)
    game.setDialogTextColor(1)
}
sprites.onOverlap(SpriteKind.Attendant, SpriteKind.Turn2, function (sprite, otherSprite) {
    Attendant2.vy = -100
    Attendant2.vx = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Tut03, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    game.setDialogTextColor(9)
    game.setDialogFrame(img`
        f 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
        9 9 f f f f f f f f f f f 9 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 9 f f f f f f f f f f f 9 9 
        f 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
        `)
    game.showLongText("By the way, you won't wanna use that camera too much...", DialogLayout.Center)
    game.showLongText("If you direct your eye to the corner you'll see that you only have a limited amount of film.", DialogLayout.Center)
    game.showLongText("You'll want at least one of those so you can snap a pick of your target.", DialogLayout.Center)
    if (Film_Count == 0) {
        game.showLongText("Looks like you went a little trigger happy there, I'll help you out but just this once...", DialogLayout.Center)
        Film_Count = 1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.popcornnotifyer, function (sprite, otherSprite) {
    PopcornMachine.setImage(assets.image`myImage1`)
    if (controller.A.isPressed()) {
        sprites.destroy(otherSprite)
        animation.runImageAnimation(
        PopcornMachine,
        assets.animation`myAnim`,
        200,
        true
        )
        timer.after(10, function () {
            Hungry = 0
            game.showLongText("IS THAT POPCORN!!!", DialogLayout.Bottom)
            Attendant2.vy = 100
            scene.cameraFollowSprite(Attendant2)
            timer.after(4000, function () {
                sprites.destroy(Attendant2)
            })
        })
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Hidden == 0) {
        if (DroneActive == 1) {
            animation.stopAnimation(animation.AnimationTypes.All, Spr_Player)
            Spr_Player.setImage(assets.image`RatzDrone_Down`)
        } else {
            animation.stopAnimation(animation.AnimationTypes.All, Spr_Player)
            animation.runImageAnimation(
            Spr_Player,
            assets.animation`RatziWalk_Down`,
            100,
            true
            )
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ladybathroomchecker, function (sprite, otherSprite) {
    game.setDialogTextColor(15)
    game.setDialogCursor(assets.image`BlackTextArrow`)
    game.setDialogFrame(assets.image`RatziTextbox`)
    game.showLongText("I may be a paparazzo but I'm not that low...", DialogLayout.Bottom)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Tut_0, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    game.setDialogTextColor(9)
    game.setDialogFrame(assets.image`Tutorial`)
    game.showLongText("Moving Objects are usually pretty scary, don't let them touch you unless you want to get sent back to the last checkpoint.", DialogLayout.Center)
})
function Checkpoint () {
    if (CheckPoint == 1) {
        tiles.placeOnTile(Spr_Player, tiles.getTileLocation(10, 53))
    } else if (CheckPoint == 2) {
        tiles.placeOnTile(Spr_Player, tiles.getTileLocation(61, 41))
    } else if (CheckPoint == 4) {
        tiles.placeOnTile(Spr_Player, tiles.getTileLocation(47, 41))
    }
}
// interaction between patrolling enemies and camera flash
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (otherSprite.vy != 0 || otherSprite.vx != 0) {
        currentvy = otherSprite.vy
        currentvx = otherSprite.vx
        otherSprite.vy = 0
        otherSprite.vx = 0
        One_Liner = ["Eat Film!!", "Gotcha!", "Say Cheese!"]
        Spr_Player.sayText(One_Liner._pickRandom(), 1000, true)
        info.changeScoreBy(10)
        music.setVolume(111)
        music.play(music.createSong(assets.song`MY EYES`), music.PlaybackMode.UntilDone)
        pause(3000)
        otherSprite.vy = currentvy
        otherSprite.vx = currentvx
    }
})
sprites.onOverlap(SpriteKind.Drone, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.stopAllSounds()
    Spr_drone.vx = 0
    Spr_drone.vy = 0
    sprites.destroy(Spr_drone, effects.fire, 50)
    music.stopAllSounds()
    scene.cameraShake(4, 500)
    music.setVolume(101)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
    pause(1000)
    scene.cameraFollowSprite(Spr_Player)
    controller.moveSprite(Spr_Player)
    music.setVolume(25)
    music.play(music.createSong(assets.song`T1P-T03`), music.PlaybackMode.LoopingInBackground)
    Spr_drone = sprites.create(assets.image`Car_Down`, SpriteKind.Drone)
    tiles.placeOnTile(Spr_drone, tiles.getTileLocation(2, 2))
    DroneActive = 0
})
function PlayerZoo () {
    music.stopAllSounds()
    pause(2000)
    scene.setBackgroundImage(assets.image`Background`)
    tiles.setCurrentTilemap(tilemap`Practice Area`)
    Film_Count = 5
    Item_Name = 0
    info.setScore(0)
    info.setLife(3)
    spriteutils.setLifeImage(assets.image`Little Goobs`)
    Spr_Player = sprites.create(assets.image`pap_front`, SpriteKind.Player)
    scene.cameraFollowSprite(Spr_Player)
    controller.moveSprite(Spr_Player, 100, 100)
    tiles.placeOnTile(Spr_Player, tiles.getTileLocation(2, 2))
    Spr_Film = sprites.create(assets.image`Film`, SpriteKind.Film)
    tiles.placeOnTile(Spr_Film, tiles.getTileLocation(20, 2))
    Spr_Pat = sprites.create(assets.image`pat_front`, SpriteKind.Enemy)
    tiles.placeOnTile(Spr_Pat, tiles.getTileLocation(14, 4))
    Spr_Pat.vy = 50
    Spr_Pat.setBounceOnWall(true)
    Spr_Glas = sprites.create(assets.image`glas_front`, SpriteKind.Enemy2)
    tiles.placeOnTile(Spr_Glas, tiles.getTileLocation(2, 15))
    Spr_Glas.vy = 50
    Spr_Glas.setBounceOnWall(true)
    music.setVolume(25)
    music.play(music.createSong(assets.song`T1P-T03`), music.PlaybackMode.LoopingInBackground)
}
// Downwards Camera Shot
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    if (controller.A.isPressed()) {
        if (Film_Count > 0) {
            music.setVolume(255)
            music.play(music.createSong(assets.song`Click Sound`), music.PlaybackMode.InBackground)
            projectile = sprites.createProjectileFromSprite(assets.image`Flash Down`, Spr_Player, 0, 200)
            projectile.setFlag(SpriteFlag.GhostThroughWalls, true)
            Film_Count += -1
            pause(100)
            sprites.destroy(projectile)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Tut_1, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    game.setDialogTextColor(9)
    game.setDialogFrame(img`
        f 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
        9 9 f f f f f f f f f f f 9 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 f f f f f f f f f f f f f 9 
        9 9 f f f f f f f f f f f 9 9 
        f 9 9 9 9 9 9 9 9 9 9 9 9 9 f 
        `)
    game.showLongText("Also! Whenever you take damage, you'll also lose a Camera!", DialogLayout.Center)
    game.showLongText("If you run out of cameras it's game over!", DialogLayout.Center)
    CarScore = 1
    Cars_1()
    CarScore2 = 1
    Cars_2()
})
spriteutils.onSpriteKindUpdateInterval(SpriteKind.Enemy3, 1500, function (sprite) {
    PatDirection0 += 1
    if (PatDirection0 == 4) {
        PatDirection0 = 0
    }
})
let Walking = false
let PatDirection0 = 0
let One_Liner: string[] = []
let currentvx = 0
let currentvy = 0
let Obj_Turn2: Sprite = null
let Obj_Turn: Sprite = null
let Celeb3: Sprite = null
let Celeb2: Sprite = null
let Celeb1: Sprite = null
let BigCrowd: Sprite = null
let exitdoor: Sprite = null
let ladysroomentrance: Sprite = null
let bathroomentrance: Sprite = null
let bathroomexit: Sprite = null
let Target1: Sprite = null
let PopcornMachine: Sprite = null
let PopcornNotif: Sprite = null
let bathroomchecker = false
let celebtarget: Sprite = null
let Spr_Camera: Sprite = null
let Spr_Boss: Sprite = null
let Spr_Play_Dialogue: Sprite = null
let Menu: Sprite = null
let doggie: Sprite = null
let Tutorial5: Sprite = null
let Tutorial_4: Sprite = null
let dawg: Sprite = null
let Interactable: Sprite = null
let Tutorial_3: Sprite = null
let Tutorial_2: Sprite = null
let Tutorial_1: Sprite = null
let Tutorial_0: Sprite = null
let FilmUi: Sprite = null
let FlashCams: Sprite = null
let SpeedBump2: Sprite = null
let StationaryCar: Sprite = null
let TheaterSign2: Sprite = null
let TheaterSign: Sprite = null
let TicketWindow: Sprite = null
let CrowdTurn: Sprite = null
let Spr_Glas: Sprite = null
let lamp3: Sprite = null
let lamp2: Sprite = null
let lamp4: Sprite = null
let Spr_Film: Sprite = null
let Spr_CameraPU: Sprite = null
let Item_Name = 0
let BackDoor = 0
let Door1: Sprite = null
let MovingCrowd: Sprite = null
let TrashDialogue1 = 0
let MeanCar3: Sprite = null
let MeanCar2: Sprite = null
let MeanCar: Sprite = null
let CarScore = 0
let Spr_Glas2: Sprite = null
let Spr_Glas1: Sprite = null
let VentCovering: Sprite = null
let IDFK = 0
let Hungry = 0
let MeanCar6: Sprite = null
let MeanCar5: Sprite = null
let Meancar4: Sprite = null
let CarScore2 = 0
let Attendant3: Sprite = null
let Attendant4: Sprite = null
let Projector: Sprite = null
let Attendant: Sprite = null
let WinScreen: Sprite = null
let Spr_Pat5: Sprite = null
let Spr_Pat4: Sprite = null
let Spr_Pat3: Sprite = null
let Spr_Pat2: Sprite = null
let Spr_Pat: Sprite = null
let Spr_Player: Sprite = null
let projectile: Sprite = null
let Film_Count = 0
let Hidden = 0
let Spr_drone: Sprite = null
let DroneActive = 0
let InteractableActive = 0
let InteractableTut = 0
let Level = 0
let Asleep = 0
let Attendant2: Sprite = null
let CheckPoint = 0
if (CheckPoint == 2) {
    if (Attendant2.vy < 0) {
        Attendant2.setImage(assets.image`myImage18`)
    } else if (Attendant2.vy > 0) {
        Attendant2.setImage(assets.image`Attendant`)
    } else if (Attendant2.vx > 0) {
        Attendant2.setImage(assets.image`myImage16`)
    } else if (Attendant2.vx < 0) {
        Attendant2.setImage(assets.image`myImage17`)
    }
}
Asleep = 1
Level = 1
RunLevel()
InteractableTut = 1
InteractableActive = 0
DroneActive = 0
Spr_drone = sprites.create(assets.image`Car_Right`, SpriteKind.Drone)
game.onUpdate(function () {
    Walking = controller.up.isPressed() || (controller.down.isPressed() || (controller.left.isPressed() || controller.right.isPressed()))
    if (!(Walking) || DroneActive == 1) {
        animation.stopAnimation(animation.AnimationTypes.All, Spr_Player)
    }
    if (Film_Count == 6) {
        FilmUi.setImage(assets.image`Film_0`)
    } else if (Film_Count == 5) {
        FilmUi.setImage(assets.image`Film_5`)
    } else if (Film_Count == 4) {
        FilmUi.setImage(assets.image`Film_4`)
    } else if (Film_Count == 3) {
        FilmUi.setImage(assets.image`Film_3`)
    } else if (Film_Count == 2) {
        FilmUi.setImage(assets.image`Film_2`)
    } else if (Film_Count == 1) {
        FilmUi.setImage(assets.image`Film_1`)
    } else if (Film_Count == 0) {
        FilmUi.setImage(assets.image`Film_6`)
    } else if (Film_Count > 6) {
        Film_Count = 6
    }
})
game.onUpdateInterval(500, function () {
    HungryAttendant()
    if (Asleep == 0 && spriteutils.distanceBetween(Spr_Player, Attendant) < 40) {
        game.showLongText("HEY! Get out of here!", DialogLayout.Bottom)
        game.showLongText("I'll lose my job!", DialogLayout.Bottom)
        info.changeLifeBy(-1)
        Checkpoint()
    }
})
forever(function () {
    P_Drone()
    E_Patrol()
    E_Sunglasses()
    GlassesChase()
    TrashCan()
    Doggy()
    if (Spr_Player.overlapsWith(MovingCrowd)) {
        Hidden = 1
        animation.stopAnimation(animation.AnimationTypes.All, Spr_Player)
        Spr_Player.setImage(assets.image`Ratzi_Hidden`)
    } else if (spriteutils.distanceBetween(Spr_Player, MovingCrowd) > 30 && spriteutils.distanceBetween(Spr_Player, MovingCrowd) < 50) {
        Hidden = 0
        Spr_Player.setImage(assets.image`pap_front`)
    }
})
