#import <Cordova/CDVPlugin.h>
#import <CommonCrypto/CommonCrypto.h>
#import "../NSData+NSData_AES256Encryption.h"

@implementation NSData (NSData_AES256Encryption)
@end


@interface MyCordovaPlugin : CDVPlugin {
}

// The hooks for our plugin commands
- (void)echo:(CDVInvokedUrlCommand *)command;
- (void)getDate:(CDVInvokedUrlCommand *)command;

@end
