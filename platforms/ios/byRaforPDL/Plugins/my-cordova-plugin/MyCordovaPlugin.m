#import "MyCordovaPlugin.h"

#import <Cordova/CDVAvailability.h>

NSString * const
kRNCryptManagerErrorDomain = @"net.robnapier.RNCryptManager";

const CCAlgorithm kAlgorithm = kCCAlgorithmAES128;
const NSUInteger kAlgorithmKeySize = kCCKeySizeAES128;
const NSUInteger kAlgorithmBlockSize = kCCBlockSizeAES128;
const NSUInteger kAlgorithmIVSize = kCCBlockSizeAES128;
const NSUInteger kPBKDFSaltSize = 8;
const NSUInteger kPBKDFRounds = 10000;  // ~80ms on an iPhone 4

@implementation MyCordovaPlugin

- (void)pluginInitialize {
}

- (void)echo:(CDVInvokedUrlCommand *)command {
  NSString* phrase = [command.arguments objectAtIndex:0];
    
    NSString *hexKey = @"8c96b7e521bd78ccbb81b028b93d5511991e054112ad81c082200e71213cdffb";
    NSString *hexIV = nil;

    NSString *user = [phrase valueForKey:@"userName"];
    NSString *host = [[phrase valueForKey:@"server"] valueForKey:@"ip"];
    NSString *pswd = [phrase valueForKey:@"password"];
    NSNumber *port = ([[phrase valueForKey:@"server"] valueForKey:@"port"] == nil)
    ?@22
    :[[[NSNumberFormatter alloc]init] numberFromString:[[phrase valueForKey:@"server"] valueForKey:@"port"] ];

    NSString *plainText =  [NSString stringWithFormat: @"%@|%@:%@|%@", user,host,port,pswd];
    hexIV = @"010932650CDD998833CC0AFF9AFF00FF";
    NSString *chipper = [self encodeAndPrintPlainText:plainText usingHexKey:hexKey hexIV:hexIV];

  NSLog(@"ini hasilnya %@", chipper);
    
    CDVPluginResult *result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:chipper];
    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}

- (void)getDate:(CDVInvokedUrlCommand *)command {
  NSDateFormatter *dateFormatter = [[NSDateFormatter alloc] init];
  NSLocale *enUSPOSIXLocale = [NSLocale localeWithLocaleIdentifier:@"en_US_POSIX"];
  [dateFormatter setLocale:enUSPOSIXLocale];
  [dateFormatter setDateFormat:@"yyyy-MM-dd'T'HH:mm:ssZZZZZ"];

  NSDate *now = [NSDate date];
  NSString *iso8601String = [dateFormatter stringFromDate:now];

  CDVPluginResult *result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:iso8601String];
  [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}

- (NSString*) encodeAndPrintPlainText:(NSString *)plainText
                    usingHexKey:(NSString *)hexKey
                          hexIV:(NSString *)hexIV
{
    NSData *data = [plainText dataUsingEncoding:NSUTF8StringEncoding];
    
    NSData *encryptedPayload = [data encryptedDataWithHexKey:hexKey
                                                       hexIV:hexIV];
    NSString *cipherText = @"";
    if (encryptedPayload) {
        cipherText = [encryptedPayload base64EncodedStringWithOptions:0];
        NSLog(@"Encryped Result: %@", cipherText);
    }
    return cipherText;
}

@end
